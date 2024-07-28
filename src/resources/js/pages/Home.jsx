import REACT_LOGO from "@/assets/react-2.svg";
import LARAVEL_LOGO from "@/assets/laravel-2.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="bg-dark">
                <div className="container d-flex justify-content-end pt-3">
                    <Link className="text-white" to="/login">
                        Login
                    </Link>
                </div>
            </div>
            <div
                className="d-flex justify-content-center align-items-center bg-dark"
                style={{ height: "calc(100vh - 40px)" }}
            >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex justify-content-center">
                        <img src={REACT_LOGO} alt="" width={300} height={300} />
                        <img
                            src={LARAVEL_LOGO}
                            alt=""
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className="text-white mt-1">
                        Hello, You may start using this template.
                    </h1>
                    <p className="text-white">
                        Edit src/resources/js/pages/Home.jsx and save to reload
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
