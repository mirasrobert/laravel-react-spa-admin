import { useEffect } from "react";
import SideBarLink from "../sidebar/SideBarLink";
import SideBarLogo from "../sidebar/SideBarLogo";
// Themify Icons

const Sidebar = () => {
    useEffect(() => {
        const handleSidebarLinkClick = function () {
            const parent = this.parentElement;

            if (parent.classList.contains("open")) {
                slideUp(parent.querySelector(".dropdown-menu"), 200, () => {
                    parent.classList.remove("open");
                });
            } else {
                const openItems =
                    parent.parentElement.querySelectorAll("li.open");
                openItems.forEach((openItem) => {
                    slideUp(openItem.querySelector(".dropdown-menu"), 200);
                    openItem.classList.remove("open");
                });

                slideDown(parent.querySelector(".dropdown-menu"), 200, () => {
                    parent.classList.add("open");
                });
            }
        };

        const sidebarLinks = document.querySelectorAll(
            ".sidebar .sidebar-menu li a"
        );
        sidebarLinks.forEach((anchor) => {
            anchor.addEventListener("click", handleSidebarLinkClick);
        });

        return () => {
            sidebarLinks.forEach((anchor) => {
                anchor.removeEventListener("click", handleSidebarLinkClick);
            });
        };
    }, []);

    // Sidebar
    const slideUp = (element, duration, callback) => {
        if (element) {
            element.style.transition = `height ${duration}ms`;
            element.style.height = `${element.scrollHeight}px`;
            requestAnimationFrame(() => {
                element.style.height = "0";
            });
            setTimeout(() => {
                element.style.display = "none";
                if (callback) callback();
            }, duration);
        }
    };

    const slideDown = (element, duration, callback) => {
        if (element) {
            element.style.display = "block";
            element.style.height = "0";
            requestAnimationFrame(() => {
                element.style.transition = `height ${duration}ms`;
                element.style.height = `${element.scrollHeight}px`;
            });
            setTimeout(() => {
                element.style.height = "";
                if (callback) callback();
            }, duration);
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar-inner">
                {/* <!-- ### $Sidebar Header ### --> */}
                <SideBarLogo />

                {/* <!-- ### $Sidebar Menu ### --> */}
                <ul className="sidebar-menu scrollable pos-r">
                    <SideBarLink to={"/dashboard"}>
                        <span className="icon-holder mT-30">
                            <i className="c-blue-500 ti-home"></i>
                        </span>
                        <span className="title">Dashboard</span>
                    </SideBarLink>
                    <SideBarLink to={"/blank"}>
                        <span className="icon-holder">
                            <i className="c-brown-500 ti-email"></i>
                        </span>
                        <span className="title">Blank Page</span>
                    </SideBarLink>
                    <SideBarLink to="/users">
                        <span className="icon-holder">
                            <i className="ti-user" aria-hidden="true"></i>
                        </span>
                        <span className="title">Users</span>
                    </SideBarLink>
                    <SideBarLink className="nav-item" to="/forms">
                        <span className="icon-holder">
                            <i className="c-light-blue-500 ti-pencil"></i>
                        </span>
                        <span className="title">Forms</span>
                    </SideBarLink>
                    <SideBarLink to="/ui-elements">
                        <span className="icon-holder">
                            <i className="c-pink-500 ti-palette"></i>
                        </span>
                        <span className="title">UI Elements</span>
                    </SideBarLink>
                    <li className="nav-item dropdown">
                        <a className="dropdown-toggle" href="#">
                            <span className="icon-holder">
                                <i className="c-teal-500 ti-view-list-alt"></i>
                            </span>
                            <span className="title">Multiple Levels</span>
                            <span className="arrow">
                                <i className="ti-angle-right"></i>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="nav-item dropdown">
                                <a href="#">
                                    <span>Menu Item</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#">
                                    <span>Menu Item</span>
                                    <span className="arrow">
                                        <i className="ti-angle-right"></i>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Menu Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Menu Item</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
