import { Link, useLoaderData } from "react-router-dom";
import axiosClient from "../../../axios-client"

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/mentors/${params.mentorId}`);
        const mentor = res.data.data;
        return mentor;
    } catch (err) {
        console.log(err.response);
    }
}

export default function ShowUserMentor() {
    const mentor = useLoaderData();

    return (
        <div className="show-user-mentor mt-2">
            <div>
                <div className="display-pic">
                    {/* Image */}
                </div>
                <div className="mentor-profile">
                    <div className="mt-2">
                        <h4 className="fs-3">
                            {mentor.firstName} {mentor.lastName}
                        </h4>

                        <p className="m-0">
                            <small>
                                {mentor.field} <span className="text-secondary">at</span> ACP Corp
                            </small>
                        </p>

                        <p>
                            <span className="fw-2">
                                Mentor&apos;s Bio <br />
                            </span>
                            <small>
                                {mentor.bio}
                            </small>
                        </p>

                        <p>
                            <span className="fw-2">
                                Languages <br />
                            </span>
                            <small>
                                {mentor.language}
                            </small>
                        </p>

                        <div className="socials">
                            <span className="fw-2">Socials</span> <br />
                            <span>
                                <i className="bi bi-linkedin"></i> <Link to={`${mentor.linkedinHandle}`}>view profile ⇗</Link>
                            </span> &nbsp;
                            <span>
                                <i className="bi bi-twitter"></i> <Link to={mentor.twitterHandle ? mentor.twitterHandle : ""}>view profile ⇗</Link>
                            </span>
                        </div>
                    </div>
                    <aside className="mt-2">
                        <div>
                            <p className="fs-2 fw-2 m-0">
                                Group sessions
                            </p>
                            <p className="text-secondary">
                                No Upcoming Group Sessions
                            </p>
                        </div>
                        <br />
                        <div>
                            <p className="fs-2 fw-2 m-0">
                                Education
                            </p>
                            <p>
                                <b>Ahmadu Bello University</b> <br />
                                <span className="text-secondary">Computer Science</span> • <i>Bachelors</i>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="mt-3">
                <Link to={"create"}>
                    <button className="btn">
                        Request Session
                    </button>
                </Link>
            </div>
        </div>
    )
}
