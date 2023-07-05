import { Outlet, Link, NavLink, Navigate } from "react-router-dom";
import logo from '../../assets/owena_logo.png'
import "./userLayout.scss"
import axiosClient from "../../axios-client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, logoutAdmin, setAdmin } from "../../features/admin/authAdminSlice";

export default function AdminLayout() {
    const dispatch = useDispatch();

    const { token } = useSelector(state => state.authAdmin);
    const { admin } = useSelector(state => state.authAdmin);
    const { loading } = useSelector(state => state.authAdmin);

    if (!token) {
        return <Navigate to={"/auth/admin/login"} />
    }

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/admin/logout')
            .then(() => {
                dispatch(logoutAdmin());
                window.location.href = "/";
            });
    }

    const init = () => {
        dispatch(getAdmin());
        axiosClient.get('/user').then(({ data }) => {
            dispatch(setAdmin(data));
        })
    }

    useEffect(() => {
        init(); //fetch logged in admin details
    }, [])

    return (
        <>
            <header style={navStyle}>
                <nav>
                    <div id="nav-list">
                        <span style={logo_bg}>
                            <img src={logo} alt="_logo" style={{ width: '40px' }} />
                        </span>

                        <Link to={"/"}>
                            <h1>OwenaHub</h1>
                        </Link>
                    </div>

                    <div style={color}>
                        <i className="bi bi-person-circle" style={userIcon}></i>
                        {
                            loading ? (" ") : (<span>{admin.first_name}</span>)
                        }
                    </div>
                </nav>
            </header>

            <main id="user-layout">
                <div id="user-navigation">
                    <NavLink to={"dashboard"} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                        <div >
                            <i className="bi bi-bookmarks"></i> Dashboard
                        </div>
                    </NavLink>
                    <NavLink to={"articles"} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                        <div>
                            <i className="bi bi-vector-pen"></i> Articles
                        </div>
                    </NavLink>
                    <NavLink to={"slices"} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                        <div>
                            <i className="bi bi-journal-bookmark-fill"></i> Slices
                        </div>
                    </NavLink>
                    <NavLink to={"forum"} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                        <div>
                            <i className="bi bi-calendar-week"></i> Forums
                        </div>
                    </NavLink>
                    <button onClick={onLogout} id="logout">
                        <i className="bi bi-arrow-right-circle"></i> Log Out
                    </button>
                </div>
                <div id="outlet">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

const navStyle = {
    backgroundColor: "#F7FAFC",
}

const color = {
    color: "#fff",
    padding: "0.1rem 0.4rem",
    backgroundColor: "#211502",
    minWidth: "50px",
    borderRadius: "15px",
    transition: "all 1s ease"

}

const userIcon = {
    color: "#F8AC0D",
    marginRight: "0.3rem",
    fontSize: "1.3rem"
}

const logo_bg = {
    backgroundColor: "#211502",
    margin: "2px 4px",
    borderRadius: "5px",
    height: "fit-content"
}