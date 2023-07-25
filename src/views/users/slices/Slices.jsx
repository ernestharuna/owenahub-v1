import { Link } from "react-router-dom"
import "./slices.scss"

export default function Slices() {
    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Slices
            </h4>
            <p>
                Join the waitlists when sessions become available.
            </p>
            <Link to={"/waitlist"}>
                <button className="btn">
                    Join Waitlist
                </button>
            </Link>
        </div>
    )
}
