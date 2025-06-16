import {
    FaBoxOpen,
    FaClipboardList,
    FaSignOutAlt,
    FaStore,
    FaUser,
  } from "react-icons/fa";
  import { Link, NavLink, useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { logout } from "../../redux/slices/authSlice";
  import { clearCart } from "../../redux/slices/cartSlice";
  
  const AdminSideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleLogOut = () => {
      dispatch(logout());
      dispatch(clearCart());
      navigate("/");
    };
  
    const baseLinkClass =
      "flex items-center space-x-2 py-3 px-4 rounded transition";
    const activeClass = "bg-gray-600 text-white";
    const inactiveClass =
      "text-gray-300 hover:bg-gray-500 hover:text-white";
  
    return (
      <div className="min-h-screen w-full bg-gray-800 text-white p-6 flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <Link to="/" className="text-3xl font-bold tracking-wide text-white">
              Rabbit
            </Link>
          </div>
  
          <h2 className="text-xl font-semibold mb-6 text-center">
            Admin Dashboard
          </h2>
  
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              <FaUser />
              <span>Users</span>
            </NavLink>
  
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              <FaBoxOpen />
              <span>Products</span>
            </NavLink>
  
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              <FaClipboardList />
              <span>Orders</span>
            </NavLink>
  
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              <FaStore />
              <span>Store</span>
            </NavLink>
          </nav>
        </div>
  
        <button
          onClick={handleLogOut}
          className="mt-6 w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg space-x-2 uppercase font-medium transition"
        >
          <FaSignOutAlt size={18} />
          <span>Logout</span>
        </button>
      </div>
    );
  };
  
  export default AdminSideBar;
  