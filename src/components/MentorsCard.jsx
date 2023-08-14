import { Link } from "react-router-dom";

export default function MentorsCard({ mentor }) {
    let route;
    if (localStorage.getItem('USER_TOKEN')) {
        route = `/user/mentors/show/${mentor.id}/${mentor.firstName}${mentor.lastName}`;
    } else {
        route = "/auth/login";
    }
    return (
        <Link to={route}>
            <div className="flex-items flex-wrap p-2 mt-1 mentor-card">
                <div className="mentor-box">
                    <div className="picture">

                    </div>
                    <div className="detail">
                        <div className="name fw-2">{mentor.firstName} {mentor.lastName}</div>
                        <small>{mentor.field}</small>
                    </div>
                </div>
                <div className="badge">
                    <i className="bi bi-award fs-2"></i>
                </div>
            </div>
        </Link>
    )
}
