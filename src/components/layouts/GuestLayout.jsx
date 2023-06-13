import { Outlet } from "react-router-dom";
import PrimaryBtn from "../PrimaryBtn";

import logo from '../../assets/owena_logo.png'

const GuestLayout = () => {
    return (
        <>
            <header>
                <nav className="">
                    <div id="nav-list">
                        <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        <h1>OwenaHub</h1>
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
                    <h1>The Owena Hub</h1>
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