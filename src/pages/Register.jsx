import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    return(
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                {/* <!-- Register Card --> */}
                    <div className="card">
                        <div className="card-body">
                        {/* <!-- Logo --> */}
                            <div className="app-brand justify-content-center">
                                <a href="#" className="app-brand-link gap-2">
                                <span className="app-brand-logo demo"></span>
                                <span className="app-brand-text demo text-body fw-bolder">Elise</span>
                                </a>
                            </div>
                            {/* <!-- /Logo --> */}
                            <h4 className="mb-2">Adventure starts here 🚀</h4>
                            <p className="mb-4">Make your app management easy and fun!</p>

                            <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                                <div className="mb-3">
                                    <label for="basic-default-work" className="form-label">Work as</label>
                                    <select className="form-select" id="basic-default-work" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">Event Organizer</option>
                                        <option value="2">Musisi</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        autofocus
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <label className="form-label" for="password">Password</label>
                                    <div className="input-group input-group-merge">
                                        <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password"
                                        />
                                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                                        <label className="form-check-label" for="terms-conditions">
                                        I agree to
                                        <a href="javascript:void(0);">privacy policy & terms</a>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary d-grid w-100">Sign up</button>
                            </form>

                            <p className="text-center">
                                <span>Already have an account?</span>
                                <a href="/Login">
                                <span>Sign in instead</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;