import { Link } from "react-router-dom";

const SideBarLink = ({ to = "/", children }) => {
    return (
        <li className="nav-item actived">
            <Link className="sidebar-link" to={to}>
                {children}
            </Link>
        </li>
    );
};

export default SideBarLink;
