import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAdminProducts } from "../redux/slices/adminProductSlice";
import { fetchAllOrders } from "../redux/slices/adminOrderSlice";
import { useEffect } from "react";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const { products, loading: productsLoading, error: productsError } = useSelector(
    (state) => state.adminProducts
  );
  const {
    orders = [],
    totalOrders = 0,
    totalSales = 0,
    loading: ordersLoading,
    error: ordersError,
  } = useSelector((state) => state.adminOrders);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResult = await dispatch(fetchAdminProducts());
        const ordersResult = await dispatch(fetchAllOrders());

        if (fetchAdminProducts.fulfilled.match(productsResult)) {
          console.log("Admin products fetched successfully.");
        } else {
          console.error("Failed to fetch admin products:", productsResult.error);
        }

        if (fetchAllOrders.fulfilled.match(ordersResult)) {
          console.log("All orders fetched successfully.");
        } else {
          console.error("Failed to fetch orders:", ordersResult.error);
        }
      } catch (err) {
        console.error("Unexpected error during admin data fetch:", err);
      }
    };

    fetchData();
  }, [dispatch]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  const isLoading = productsLoading || ordersLoading;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 pb-6 border-b">Admin Dashboard</h1>

      {isLoading ? (
        <p className="text-gray-600">Loading data...</p>
      ) : productsError || ordersError ? (
        <div className="text-red-500 space-y-2">
          {productsError && <p>Error fetching products: {productsError}</p>}
          {ordersError && <p>Error fetching orders: {ordersError}</p>}
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-4 shadow-lg rounded-lg bg-white">
              <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalSales)}</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white">
              <h2 className="text-lg font-semibold text-gray-700">Total Orders</h2>
              <p className="text-2xl font-bold text-blue-600">{totalOrders}</p>
              <Link to="/admin/orders" className="text-blue-500 hover:underline text-sm">
                Manage Orders
              </Link>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white">
              <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
              <p className="text-2xl font-bold text-purple-600">{products.length}</p>
              <Link to="/admin/products" className="text-blue-500 hover:underline text-sm">
                Manage Products
              </Link>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full text-left text-sm text-gray-700">
                <thead className="bg-black text-white uppercase">
                  <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Total Price</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <tr
                        key={order._id}
                        className="border-b hover:bg-gray-100 cursor-pointer transition"
                      >
                        <td className="py-3 px-4">{order._id}</td>
                        <td className="py-3 px-4">{order.user?.name || "Unknown User"}</td>
                        <td className="py-3 px-4">{formatCurrency(order.totalPrice)}</td>
                        <td className="py-3 px-4">{order.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center text-gray-500 py-4">
                        No recent orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminHomePage;
