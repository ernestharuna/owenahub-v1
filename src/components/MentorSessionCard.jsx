import { Link } from "react-router-dom";

export default function MentorSessionCard() {
    return (
        <div className="session-card">
            <p className="time">
                Learner: Ernest Haruna <br />
                Name: Starting my tech career
            </p>
            <Link>
                <small>View ⇗</small>
            </Link>
        </div>
    );
}