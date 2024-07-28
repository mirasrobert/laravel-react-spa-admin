import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/slices/authSlice";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLogoutLoading } = useSelector((state) => state.auth);

    const handleLogout = async (e) => {
        e.preventDefault();
        await dispatch(logoutUser());

        if (isLogoutLoading === false) {
            navigate("/login");
            return;
        }
    };

    return (
        <div>
            <h3>Welcome, you are logged in!</h3>
            <button
                className="btn btn-primary text-white"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
