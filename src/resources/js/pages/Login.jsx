import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/slices/authSlice";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoginLoading, status, error } = useSelector(
        (state) => state.auth
    );

    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onLogin = async (event) => {
        event.preventDefault();
        setIsProcessing(true);
        try {
            await axios.get("/sanctum/csrf-cookie");
            dispatch(loginUser(formData)).unwrap();

            if (!isLoginLoading && status === "succeeded") {
                navigate("/dashboard");
                return;
            }
        } catch (error) {
            return;
        }
        setIsProcessing(false);
    };

    return (
        <div>
            <div className="container">
                <div
                    className="d-flex justify-content-center align-items-center flex-col"
                    style={{ minHeight: "90vh" }}
                >
                    <div className="col-md-5">
                        <div className="d-flex align-items-center">
                            <h1 className="text-center p-0 m-0 text-dark">
                                Sign In
                            </h1>
                            <img
                                className="p-0 m-0"
                                src="assets/static/images/logo.png"
                                alt="logo"
                            />
                        </div>

                        {status === "failed" && error.message ? (
                            <>
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    {error.message}
                                </div>
                            </>
                        ) : null}

                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form onSubmit={onLogin}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="exampleCheck1"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary text-white"
                                        disabled={
                                            isLoginLoading || isProcessing
                                        }
                                    >
                                        {isLoginLoading || isProcessing ? (
                                            <TailSpin
                                                visible={true}
                                                height="20"
                                                width="24"
                                                color="#fff"
                                                ariaLabel="tail-spin-loading"
                                                radius="1"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between mt-3">
                            <a href="#">Forgot password?</a>
                            <a href="#">Don't have an account? Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
