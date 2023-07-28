import MentorSessionCard from "../../../components/MentorSessionCard";
import "./mentorSessionStyle.scss";

export default function AllUserSessions() {
    return (
        <div className="animated fadeInDown2">
            {/* <div className="mt-1">
                <Link to="create">
                    <button className="btn btn-dark">
                        Create a Session ⇗
                    </button>
                </Link>
            </div> */}

            <div className="mt-1 mentor-sessions-box">
                <h5 className="mt-1 mb-1">
                    On-going Sessions
                </h5>

                <div className="mentor-sessions">
                    <MentorSessionCard />
                    <MentorSessionCard />
                    <MentorSessionCard />
                    <MentorSessionCard />
                    <MentorSessionCard />
                    <MentorSessionCard />
                </div>
            </div>
        </div>
    )
}
