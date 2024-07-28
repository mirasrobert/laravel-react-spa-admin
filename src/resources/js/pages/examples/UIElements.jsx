import { useEffect } from "react";
import Masonry from "masonry-layout";

const UIElements = () => {
    useEffect(() => {
        new Masonry(".masonry", {
            itemSelector: ".masonry-item",
            columnWidth: ".masonry-sizer",
            percentPosition: true,
        });
    }, []);

    return (
        <div className="row gap-20 masonry pos-r">
            <h4 className="c-grey-900">UI Elements</h4>
            <div className="masonry-sizer col-md-6"></div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Alerts</h6>
                    <div className="mT-30">
                        <div className="alert alert-primary" role="alert">
                            This is a primary alert—check it out!
                        </div>
                        <div className="alert alert-secondary" role="alert">
                            This is a secondary alert—check it out!
                        </div>
                        <div className="alert alert-success" role="alert">
                            This is a success alert—check it out!
                        </div>
                        <div className="alert alert-danger" role="alert">
                            This is a danger alert—check it out!
                        </div>
                        <div className="alert alert-warning" role="alert">
                            This is a warning alert—check it out!
                        </div>
                        <div className="alert alert-info" role="alert">
                            This is a info alert—check it out!
                        </div>
                        <div className="alert alert-light" role="alert">
                            This is a light alert—check it out!
                        </div>
                        <div className="alert alert-dark" role="alert">
                            This is a dark alert—check it out!
                        </div>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Buttons</h6>
                    <div className="mT-30">
                        <div className="gap-10 peers">
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-primary btn-color"
                                >
                                    Primary
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-secondary btn-color"
                                >
                                    Secondary
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-success btn-color"
                                >
                                    Success
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-danger btn-color"
                                >
                                    Danger
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-warning"
                                >
                                    Warning
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-info btn-color"
                                >
                                    Info
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-light"
                                >
                                    Light
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-dark btn-color"
                                >
                                    Dark
                                </button>
                            </div>
                        </div>

                        <div className="w-100 gap-10 peers mY-20">
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-primary"
                                >
                                    Primary
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-secondary"
                                >
                                    Secondary
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-success"
                                >
                                    Success
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-danger"
                                >
                                    Danger
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-warning"
                                >
                                    Warning
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-info"
                                >
                                    Info
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-light"
                                >
                                    Light
                                </button>
                            </div>
                            <div className="peer">
                                <button
                                    type="button"
                                    className="btn cur-p btn-outline-dark"
                                >
                                    Dark
                                </button>
                            </div>
                        </div>

                        <div
                            className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups"
                        >
                            <div
                                className="btn-group me-2"
                                role="group"
                                aria-label="First group"
                            >
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    1
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    2
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    3
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    4
                                </button>
                            </div>
                            <div
                                className="btn-group me-2"
                                role="group"
                                aria-label="Second group"
                            >
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    5
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    6
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    7
                                </button>
                            </div>
                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Third group"
                            >
                                <button
                                    type="button"
                                    className="btn btn-success btn-color"
                                >
                                    8
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Dropdowns</h6>
                    <div className="mT-30">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown button
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </div>
                        </div>

                        {/* <!-- Example split danger button --> */}
                        <div className="btn-group mT-20">
                            <button
                                type="button"
                                className="btn btn-danger btn-color"
                            >
                                Action
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">List Group</h6>
                    <div className="mT-30">
                        <div className="list-group">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action active"
                                aria-current="true"
                            >
                                The current link item
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action"
                            >
                                A second link item
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action"
                            >
                                A third link item
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action"
                            >
                                A fourth link item
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action disabled"
                                tabindex="-1"
                                aria-disabled="true"
                            >
                                A disabled link item
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Modal</h6>
                    <div className="mT-30">
                        {/* <!-- Button trigger modal --> */}
                        <button
                            type="button"
                            className="btn btn-primary btn-color"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Launch demo modal
                        </button>

                        {/* <!-- Modal --> */}
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel"
                                        >
                                            Modal title
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">...</div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Popover</h6>
                    <div className="mT-30">
                        <button
                            type="button"
                            className="btn btn-lg btn-danger btn-color"
                            data-bs-toggle="popover"
                            title="Popover title"
                            data-bs-content="And here's some amazing content. It's very engaging. Right?"
                        >
                            Click to toggle popover
                        </button>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Progress</h6>
                    <div className="mT-30">
                        {/* <!-- Progress Bars --> */}
                        <div className="layers">
                            <div className="layer w-100">
                                <h5 className="mB-5">100k</h5>
                                <small className="fw-600 c-grey-700">
                                    Visitors From USA
                                </small>
                                <span className="pull-right c-grey-600 fsz-sm">
                                    50%
                                </span>
                                <div className="progress mT-10">
                                    <div
                                        className="progress-bar bgc-deep-purple-500"
                                        role="progressbar"
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "50%" }}
                                    >
                                        {" "}
                                        <span className="sr-only">
                                            50% Complete
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="layer w-100 mT-15">
                                <h5 className="mB-5">1M</h5>
                                <small className="fw-600 c-grey-700">
                                    Visitors From Europe
                                </small>
                                <span className="pull-right c-grey-600 fsz-sm">
                                    80%
                                </span>
                                <div className="progress mT-10">
                                    <div
                                        className="progress-bar bgc-green-500"
                                        role="progressbar"
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "80%" }}
                                    >
                                        {" "}
                                        <span className="sr-only">
                                            80% Complete
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="layer w-100 mT-15">
                                <h5 className="mB-5">450k</h5>
                                <small className="fw-600 c-grey-700">
                                    Visitors From Australia
                                </small>
                                <span className="pull-right c-grey-600 fsz-sm">
                                    40%
                                </span>
                                <div className="progress mT-10">
                                    <div
                                        className="progress-bar bgc-light-blue-500"
                                        role="progressbar"
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "40%" }}
                                    >
                                        {" "}
                                        <span className="sr-only">
                                            40% Complete
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="layer w-100 mT-15">
                                <h5 className="mB-5">1B</h5>
                                <small className="fw-600 c-grey-700">
                                    Visitors From India
                                </small>
                                <span className="pull-right c-grey-600 fsz-sm">
                                    90%
                                </span>
                                <div className="progress mT-10">
                                    <div
                                        className="progress-bar bgc-blue-grey-500"
                                        role="progressbar"
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "90%" }}
                                    >
                                        {" "}
                                        <span className="sr-only">
                                            90% Complete
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Tootips</h6>
                    <div className="mT-30">
                        <button
                            type="button"
                            className="btn btn-primary btn-color"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Tooltip on top"
                        >
                            Tooltip on top
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary btn-color"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Tooltip on right"
                        >
                            Tooltip on right
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-color"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Tooltip on bottom"
                        >
                            Tooltip on bottom
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-color"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Tooltip on left"
                        >
                            Tooltip on left
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UIElements;
