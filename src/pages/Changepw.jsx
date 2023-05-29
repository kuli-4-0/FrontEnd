import React from 'react'

function Changepw() {
    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner py-4">
                {/* <!-- Forgot Password --> */}
                <div className="card">
                    <div className="card-body">
                    {/* <!-- Logo --> */}
                    <div className="app-brand justify-content-center">
                        <a href="index.html" class="app-brand-link gap-2">
                        <span className="app-brand-logo demo">

                        </span>
                        <span className="app-brand-text demo text-body fw-bolder">Elise</span>
                        </a>
                    </div>
                    {/* <!-- /Logo --> */}
                    <h4 className="mb-2">Forgot Password? 🔒</h4>
                    <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>
                    <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                        <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autofocus
                        />
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <label className="form-label" for="password">Old Password</label>
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
                        <div className="mb-3 form-password-toggle">
                            <label className="form-label" for="password">New Password</label>
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
                        <div className="mb-3 form-password-toggle">
                            <label className="form-label" for="password">Verify New Password</label>
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
                        <button className="btn btn-primary d-grid w-100">Submit</button>
                    </form>
                    <div className="text-center">
                        <a href="/Login" className="d-flex align-items-center justify-content-center">
                        <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                        Back to login
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Changepw;