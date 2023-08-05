import { Link } from "react-router-dom"
import "./slices.scss"

export default function Slices() {
    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Slices
            </h4>

            <div className="user-slices-banner mt-2">
                <h4>Learning with short bursts of courses</h4>
                <p className="text-secondary">
                    <i>"Like a <b>course</b> but <b>shorter</b>"</i> — Slices provide you with short and essential topics in specific fields.
                </p>
            </div>

            <p>
                Join the waitlists when slices become available.
            </p>
            <Link to={"/waitlist"}>
                <button className="btn">
                    Join Waitlist
                </button>
            </Link>
        </div>
    )
}
