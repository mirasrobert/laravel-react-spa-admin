import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layouts/Sidebar";
import Topbar from "@/components/layouts/Topbar";
import Footer from "@/components/layouts/Footer";

const MasterLayout = () => {
    return (
        <div>
            <Sidebar />

            {/* <!-- ### $App Screen Content ### --> */}
            <div className="page-container">
                {/* <!-- ### $Topbar ### --> */}
                <Topbar />

                <main className="main-content bgc-grey-100">
                    <div id="mainContent">
                        <Outlet />
                    </div>
                </main>

                {/* <!-- ### $App Screen Footer ### --> */}
                <Footer />
            </div>
        </div>
    );
};

export default MasterLayout;
