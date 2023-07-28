import { Outlet, Link, NavLink, Navigate, useNavigation } from "react-router-dom";
import logo from '../../assets/owena_logo.png'
import "./layout.scss"
import axiosClient from "../../axios-client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMentor, setMentor, logoutMentor } from "../../features/mentor/authMentorSlice";

export default function MentorLayout() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { mentor, token, loading } = useSelector(state => state.authMentor);

    if (!token) {
        return <Navigate to={"/auth/mentor/login"} />
    }

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/mentor/logout')
            .then(() => {
                dispatch(logoutMentor());
                window.location.href = "/";
            });
    }

    const init = () => {
        dispatch(getMentor());
        axiosClient.get('/user')
            .then(({ data }) => {
                dispatch(setMentor(data));
            }).catch((err) => {
                if (err.response.status === 401) {
                    dispatch(logoutMentor());
                    window.location.href = "/";
                }
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

                    <div className="user-icon">
                        <i className="bi bi-person-circle" style={userIcon}></i>
                        {
                            loading ? (" ") : (<span className="animated fadeInDown2">{mentor.first_name}</span>)
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
                    <NavLink to={"sessions"} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                        <div>
                            <i className="bi bi-calendar-week"></i> Sessions
                        </div>
                    </NavLink>
                    <button onClick={onLogout} id="logout">
                        <i className="bi bi-arrow-right-circle"></i> Log Out
                    </button>
                </div>

                <div id="outlet" className={navigation.state === "loading" ? " loading" : ""}>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

const navStyle = {
    backgroundColor: "#DEEAF2",
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