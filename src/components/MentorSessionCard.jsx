import { Link } from "react-router-dom";

export default function MentorSessionCard({ session }) {
    return (
        <div className="session-card">
            <p className="text-secondary m-0">
                <small>
                    Learner: <span className="text-dark">{session.mentee.firstName} {session.mentee.lastName} </span><br />
                    Name: <span className="text-dark">{session.title}</span>
                </small>
            </p>
            <Link className="d-block  mt-1" to={`${session.id}`}>
                <small>View ⇗</small>
            </Link>
        </div>
    );
}