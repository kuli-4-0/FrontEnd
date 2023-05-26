import React from 'react'

const Aside = () => {
    return (
        <div>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                    <span class="app-brand-logo demo">

                    </span>
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">Elise</span>
                    </a>

                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                    </a>
                </div>

                <div className="menu-inner-shadow"></div>

                <ul className="menu-inner py-1">
                    {/* <!-- Dashboard --> */}
                    <li className="menu-item active">
                    <a href="index.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </a>
                    </li>

                    <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Menus</span>
                    </li>
                    <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Account Settings</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                        <a href="pages-account-settings-account.html" className="menu-link">
                            <div data-i18n="Account">Account</div>
                        </a>
                        </li>
                        <li className="menu-item">
                        <a href="pages-account-settings-notifications.html" className="menu-link">
                            <div data-i18n="Notifications">Notifications</div>
                        </a>
                        </li>
                    </ul>
                    </li>

                    {/* <!-- LIST -->
                    <!-- EVENT ORGANIZER --> */}
                    <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">List</span>
                    </li>
                    <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bxs-guitar-amp"></i>
                        <div data-i18n="Event Organizer">Event Organizer</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                        <a href="list-eo.html" className="menu-link">
                            <div data-i18n="Event Organizer">Event Organizer</div>
                        </a>
                        </li>
                        <li className="menu-item">
                        <a href="list-event.html" className="menu-link">
                            <div data-i18n="Event">Event</div>
                        </a>
                        </li>
                    </ul>
                    </li>

                    {/* <!-- MUSISI --> */}
                    <li className="menu-item">
                    <a href="list-musisi.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bxs-guitar-amp"></i>
                        <div data-i18n="Musisi">Musisi</div>
                    </a>
                    </li>

                    {/* <!-- FORM -->
                    <!-- EVENT ORGANIZER --> */}
                    <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Form</span>
                    </li>
                    <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bxs-guitar-amp"></i>
                        <div data-i18n="List">Event Organizer</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                        <a href="form-eo.html" className="menu-link">
                            <div data-i18n="Event Organizer">Event Organizer</div>
                        </a>
                        </li>
                        <li className="menu-item">
                        <a href="form-event.html" className="menu-link">
                            <div data-i18n="Event Organizer">Event</div>
                        </a>
                        </li>
                    </ul>
                    </li>

                    {/* <!-- MUSISI --> */}
                    <li className="menu-item">
                        <a href="form-musisi.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bxs-guitar-amp"></i>
                        <div data-i18n="Event Organizer">Musisi</div>
                        </a>
                    </li>
                </ul>
                </aside>
        </div>
    )
}

export default Aside
