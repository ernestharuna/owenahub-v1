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

        </>
    )
}

export default GuestLayout