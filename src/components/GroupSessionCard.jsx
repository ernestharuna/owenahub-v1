import { Link } from "react-router-dom"

export default function GroupSessionCard({ session }) {
    return (
        <div className="session-card">
            <p className="text-secondary m-0">
                <small>
                    Topic: <span className="text-dark">{session.topic}</span><br />
                    Date: <span className="text-dark">{session.date}</span>
                </small>
            </p>
            <Link className="d-block  mt-1" to={`group-sessions/${session.id}`}>
                <small>View ⇗</small>
            </Link>
        </div>
    )
}