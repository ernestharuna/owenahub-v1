import { Outlet, Link, NavLink, Navigate } from "react-router-dom";
import logo from '../../assets/owena_logo.png'
import "./userLayout.scss"
import axiosClient from "../../axios-client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AdminLayout() {
    const dispatch = useDispatch();

    // const { token } = useSelector(state => state.authUser);
    // const { user } = useSelector(state => state.authUser);
    const { loading } = useSelector(state => state.authAdmin);

    // if (!token) {
    //     return <Navigate to={"/auth/login"} />
    // }

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                // dispatch(logoutUser())
                window.location.href = "/";
            });
    }

    // const init = () => {
    //     dispatch(getUser());
    //     axiosClient.get('/user').then(({ data }) => {
    //         console.log(data);
    //         dispatch(setUser(data));
    //     })
    // }

    // useEffect(() => {
    //     init(); //fetch logged in admin details
    // }, [])

    const user = "rne"

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
                        {
                            loading ? (". . . ") : (<span>{user.first_name}</span>)
                        }
                        <button onClick={onLogout}>Logout</button>
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
    color: "#000"
}

const logo_bg = {
    backgroundColor: "#211502",
    margin: "2px 4px",
    borderRadius: "5px",
    height: "fit-content"
}