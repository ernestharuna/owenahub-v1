import { Outlet } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

const GuestLayout = () => {
    return (
        <>
            <header>
                <nav className="">
                    <div id="nav-list">
                        <h1>Owena</h1>
                    </div>

                    <div>
                        <PrimaryBtn text="Start for free" link="#" />
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="container">
                    <h1>Owena</h1>
                    <p>
                        <b> Email</b> <br />
                        owenacenter@gmail.com
                    </p>
                    <p>
                        <b>Phone</b> <br />
                        +2348 183 670 422
                    </p>
                    <hr />
                    <p>
                        <small>
                            Owenahub, &copy; 2023 - All rights reserved
                        </small>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default GuestLayout