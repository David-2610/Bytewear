import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllOrders, updateOrderStatus } from "../../redux/slices/adminOrderSlice";

function OrderManagement() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);
	const { orders, loading, error } = useSelector((state) => state.adminOrders);

	useEffect(() => {
		if (!user || user.role !== "admin") {
			navigate("/admin");
		} else {
			dispatch(fetchAllOrders());
		}
	}, [dispatch, user, navigate]);

	const handleStatusChange = async (orderId, status) => {
		try {
			await dispatch(updateOrderStatus({ id: orderId, status })).unwrap();
			dispatch(fetchAllOrders());
		} catch (err) {
			console.error("Failed to update status", err);
		}
	};

	if (loading) return <p className="text-gray-700">Loading...</p>;
	if (error) return <p className="text-red-600">Error: {error}</p>;

	return (
		<div className="max-w-7xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-6">Order Management</h2>

			<div className="overflow-x-auto shadow-md sm:rounded-lg">
				<table className="min-w-full text-gray-700 text-left">
					<thead className="bg-gray-100 text-sm uppercase text-gray-800">
						<tr>
							<th className="py-3 px-4">Order ID</th>
							<th className="py-3 px-4">Customer</th>
							<th className="py-3 px-4">Total Price</th>
							<th className="py-3 px-4">Status</th>
							<th className="py-3 px-4">Actions</th>
						</tr>
					</thead>

					<tbody>
						{orders.length > 0 ? (
							orders.map((order) => (
								<tr key={order._id} className="border-b hover:bg-gray-50">
									<td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
										#{order._id}
									</td>
									<td className="px-4 py-4">{order.user.name}</td>
									<td className="px-4 py-4">${order.totalPrice.toFixed(2)}</td>
									<td className="px-4 py-4">
										<select
											value={order.status}
											onChange={(e) =>
												handleStatusChange(order._id, e.target.value)
											}
											className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2"
										>
											<option value="Processing">Processing</option>
											<option value="Shipped">Shipped</option>
											<option value="Delivered">Delivered</option>
											<option value="Cancelled">Cancelled</option>
										</select>
									</td>
									<td className="px-4 py-4">
										<button
											onClick={() =>
												handleStatusChange(order._id, "Delivered")
											}
											className="bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition px-4 py-2 w-full"
										>
											Mark as Delivered
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td
									className="text-center text-gray-500 py-10 italic"
									colSpan={5}
								>
									No Orders available!
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default OrderManagement;
