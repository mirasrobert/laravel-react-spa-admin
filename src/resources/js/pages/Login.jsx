import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/slices/authSlice";

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
                <h1 className="mt-5">Login</h1>

                {status === "failed" && error.message ? (
                    <>
                        <div className="alert alert-danger" role="alert">
                            {error.message}
                        </div>
                    </>
                ) : null}

                <div className="card">
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
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone
                                    else.
                                </div>
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
                                    Check me out
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isLoginLoading || isProcessing}
                            >
                                Submit
                            </button>
                        </form>
                        <div className="d-flex justify-content-between">
                            <Link to="/">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
