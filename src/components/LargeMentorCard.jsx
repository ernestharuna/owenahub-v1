import { Link } from "react-router-dom";

export default function LargeMentorCard({ mentor }) {
    return (
        <div className="large-mentor-card">
            <div className="large-mentor-card-box">
                {/* Mentors Image */}
            </div>
            <span className="fw-2 mt-1 d-block">{mentor.firstName} {mentor.lastName}</span>
            <small className="mt-1 d-block text-secondary fw-2">
                <i className="bi bi-briefcase-fill"></i> {mentor.field} <br />
                <i className="bi bi-tools"></i> {mentor.expYears} Years Expereince &middot; 12 Sessions <br />
            </small>

            <Link to={"show/:mentorId"}>
                <button className="btn btn-black mt-2">
                    Book Now
                </button>
            </Link>
        </div>
    )
}