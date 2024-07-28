import { useEffect } from "react";
import Masonry from "masonry-layout";

const Forms = () => {
    useEffect(() => {
        new Masonry(".masonry", {
            itemSelector: ".masonry-item",
            columnWidth: ".masonry-sizer",
            percentPosition: true,
        });
    }, []);

    return (
        <div
            className="row gap-20 masonry pos-r"
            data-masonry='{"percentPosition": true }'
        >
            <div className="masonry-sizer col-md-6"></div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Basic Form</h6>
                    <div className="mT-30">
                        <form>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="exampleInputEmail1"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <small id="emailHelp" className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="exampleInputPassword1"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
                                <input
                                    type="checkbox"
                                    id="inputCall1"
                                    name="inputCheckboxesCall"
                                    className="peer"
                                />
                                <label
                                    htmlFor="inputCall1"
                                    className="form-label peers peer-greed js-sb ai-c"
                                >
                                    <span className="peer peer-greed">
                                        Call John for Dinner
                                    </span>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-color"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Complex Form Layout</h6>
                    <div className="mT-30">
                        <form>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label
                                        className="form-label"
                                        htmlFor="inputEmail4"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label
                                        className="form-label"
                                        htmlFor="inputPassword4"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="inputAddress"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="1234 Main St"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="inputAddress2"
                                >
                                    Address 2
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress2"
                                    placeholder="Apartment, studio, or floor"
                                />
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label
                                        className="form-label"
                                        htmlFor="inputCity"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                    />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label
                                        className="form-label"
                                        htmlFor="inputState"
                                    >
                                        State
                                    </label>
                                    <select
                                        id="inputState"
                                        className="form-control"
                                    >
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-2">
                                    <label
                                        className="form-label"
                                        htmlFor="inputZip"
                                    >
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputZip"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label className="form-label fw-500">
                                        Birthdate
                                    </label>
                                    <div className="timepicker-input input-icon mb-3">
                                        <div className="input-group">
                                            <div className="input-group-text bgc-white bd bdwR-0">
                                                <i className="ti-calendar"></i>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control bdc-grey-200 start-date"
                                                placeholder="Datepicker"
                                                data-provide="datepicker"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                    <input
                                        type="checkbox"
                                        id="inputCall2"
                                        name="inputCheckboxesCall"
                                        className="peer"
                                    />
                                    <label
                                        htmlFor="inputCall2"
                                        className="form-label peers peer-greed js-sb ai-c"
                                    >
                                        <span className="peer peer-greed">
                                            Call John for Dinner
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-color"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Horizontal Form</h6>
                    <div className="mT-30">
                        <form>
                            <div className="mb-3 row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="form-label col-sm-2 col-form-label"
                                >
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail3"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor="inputPassword3"
                                    className="form-label col-sm-2 col-form-label"
                                >
                                    Password
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword3"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <fieldset className="mb-3">
                                <div className="row">
                                    <legend className="col-form-legend col-sm-2">
                                        Radios
                                    </legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <label className="form-label form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gridRadios"
                                                    id="gridRadios1"
                                                    value="option1"
                                                    checked
                                                />
                                                Option one is this and
                                                that&mdash;be sure to include
                                                why it's great
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-label form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gridRadios"
                                                    id="gridRadios2"
                                                    value="option2"
                                                />
                                                Option two can be something else
                                                and selecting it will deselect
                                                option one
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <label className="form-label form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gridRadios"
                                                    id="gridRadios3"
                                                    value="option3"
                                                    disabled
                                                />
                                                Option three is disabled
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="mb-3 row">
                                <div className="col-sm-2">Checkbox</div>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <label className="form-label form-check-label">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                            />{" "}
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-10">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-color"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Disabled Forms</h6>
                    <div className="mT-30">
                        <form>
                            <fieldset disabled>
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="disabledTextInput"
                                    >
                                        Disabled input
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="disabledSelect"
                                    >
                                        Disabled select menu
                                    </label>
                                    <select
                                        id="disabledSelect"
                                        className="form-control"
                                    >
                                        <option>Disabled select</option>
                                    </select>
                                </div>
                                <div className="form-check">
                                    <label className="form-label form-check-label">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />{" "}
                                        Can't check this
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-color"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div className="masonry-item col-md-6">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">Validation</h6>
                    <div className="mT-30">
                        <form
                            className="container"
                            id="needs-validation"
                            novalidate
                        >
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="validationCustom01"
                                    >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        placeholder="First name"
                                        value="Mark"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="validationCustom02"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom02"
                                        placeholder="Last name"
                                        value="Otto"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="validationCustom03"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom03"
                                        placeholder="City"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="validationCustom04"
                                    >
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom04"
                                        placeholder="State"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="validationCustom05"
                                    >
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom05"
                                        placeholder="Zip"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-color"
                                type="submit"
                            >
                                Submit form
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;
