import React from "react";

const Tables = () => {
    return (
        <div className="container-fluid">
            <div className="mT-10 mB-30">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="c-grey-900">Data Tables</h4>
                    </div>
                    <button className="btn btn-primary text-white">
                        <i className="ti-plus text-white"></i>
                        <span className="ms-1">New User</span>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center flex-nowrap">
                                <label
                                    className="me-2 text-nowrap"
                                    htmlFor="inputState"
                                >
                                    Show
                                </label>
                                <select
                                    id="inputState"
                                    className="form-control"
                                >
                                    <option>5</option>
                                    <option>10</option>
                                    <option>25</option>
                                </select>
                                <span className="ms-2 text-nowrap">
                                    per page
                                </span>
                            </div>
                            <div className="col-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="search"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email Address</th>
                                        <th scope="col">Verified</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Mark Singe</td>
                                        <td>mark@mail.com</td>
                                        <td>Yes</td>
                                        <td>
                                            <span className="badge text-bg-success text-white">
                                                Active
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
                                                    width="20px"
                                                    height="20px"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="2"
                                                        fill="currentColor"
                                                    ></circle>
                                                    <circle
                                                        cx="12"
                                                        cy="5"
                                                        r="2"
                                                        fill="currentColor"
                                                    ></circle>
                                                    <circle
                                                        cx="12"
                                                        cy="19"
                                                        r="2"
                                                        fill="currentColor"
                                                    ></circle>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Jane Doe</td>
                                        <td>janed@mail.com</td>
                                        <td>No</td>
                                        <td>
                                            <span className="badge text-bg-success text-white">
                                                Active
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button
                                                    className="btn"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        aria-hidden="true"
                                                        role="img"
                                                        className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
                                                        width="20px"
                                                        height="20px"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="2"
                                                            fill="currentColor"
                                                        ></circle>
                                                        <circle
                                                            cx="12"
                                                            cy="5"
                                                            r="2"
                                                            fill="currentColor"
                                                        ></circle>
                                                        <circle
                                                            cx="12"
                                                            cy="19"
                                                            r="2"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </svg>
                                                </button>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton"
                                                >
                                                    <button
                                                        className="dropdown-item"
                                                        type="button"
                                                    >
                                                        <i className="ti-pencil"></i>
                                                        <span className="ms-2">
                                                            Edit
                                                        </span>
                                                    </button>
                                                    <button
                                                        className="dropdown-item text-danger"
                                                        type="button"
                                                    >
                                                        <i className="ti-trash"></i>
                                                        <span className="ms-2">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Alex Goot</td>
                                        <td>alexg05@mail.com</td>
                                        <td>Yes</td>
                                        <td>
                                            <span className="badge text-bg-danger text-white">
                                                Banned
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button
                                                    className="btn"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        aria-hidden="true"
                                                        role="img"
                                                        className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
                                                        width="20px"
                                                        height="20px"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="2"
                                                            fill="currentColor"
                                                        ></circle>
                                                        <circle
                                                            cx="12"
                                                            cy="5"
                                                            r="2"
                                                            fill="currentColor"
                                                        ></circle>
                                                        <circle
                                                            cx="12"
                                                            cy="19"
                                                            r="2"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </svg>
                                                </button>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton"
                                                >
                                                    <button
                                                        className="dropdown-item"
                                                        type="button"
                                                    >
                                                        <i className="ti-pencil"></i>
                                                        <span className="ms-2">
                                                            Edit
                                                        </span>
                                                    </button>
                                                    <button
                                                        className="dropdown-item text-danger"
                                                        type="button"
                                                    >
                                                        <i className="ti-trash"></i>
                                                        <span className="ms-2">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div
                                className="d-flex justify-content-end align-items-center"
                                role="toolbar"
                                aria-label="Toolbar with button groups"
                            >
                                <span className="me-4">Showing 1–10 of 24</span>
                                <div
                                    className="btn-group me-2"
                                    role="group"
                                    aria-label="First group"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-dark text-white btn-color"
                                    >
                                        <i className="ti-angle-left"></i>
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-dark text-white btn-color"
                                        disabled
                                    >
                                        <i className="ti-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tables;
