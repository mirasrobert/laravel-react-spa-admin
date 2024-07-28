import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/features/slices/authSlice";

const GuestRoute = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isAuthenticated, status, isLoading } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        const checkAuth = async () => {
            if (user == null && status === "idle") {
                // Dispatch fetchUser if user is not present in state
                await dispatch(fetchUser());
            }
        };

        checkAuth();
    }, []);

    useEffect(() => {
        // Perform redirection after authentication check and loading is complete
        if (isLoading === false) {
            if (isAuthenticated) {
                navigate("/dashboard");
                return;
            }
        }
    }, [isLoading, isAuthenticated, navigate]);

    // Redirect if not authenticated and loading
    return !isAuthenticated && isLoading === false ? children : null;
};

export default GuestRoute;
