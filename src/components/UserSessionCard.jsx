import { Link } from "react-router-dom";

export default function UserSessionCard({ session }) {
    return (
        <Link to={`${session.id}`}>
            <div className="session-card animated fadeInDown">
                <p>
                    <small>
                        <span className="text-secondary">Mentor:</span> {session.mentor.firstName} {session.mentor.lastName} <br />
                        <span className="text-secondary">Name:</span> {session.title}<br />
                    </small>
                </p>
            </div>
        </Link>
    )
}
