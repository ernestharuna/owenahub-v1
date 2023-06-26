import { Outlet, Link, NavLink } from "react-router-dom";
import logo from '../../assets/owena_logo.png'
import "../../styles/userLayout.scss"

export default function UserLayout() {
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

                    <div>

                        <button>Logout</button>
                    </div>
                </nav>
            </header>

            <main id="user-layout">
                <div id="user-navigation">
                    <NavLink to={"dashboard"}>
                        <div className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                            <i class="bi bi-bookmarks"></i> Dashboard
                        </div>
                    </NavLink>
                    <NavLink to={"slices"}>
                        <div className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                            <i class="bi bi-journal-bookmark-fill"></i> Slices
                        </div>
                    </NavLink>
                    <NavLink to={"forum"}>
                        <div className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                            <i class="bi bi-calendar-week"></i> Forums
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