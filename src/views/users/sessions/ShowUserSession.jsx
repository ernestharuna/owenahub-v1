import { useLoaderData } from "react-router-dom";
import axiosClient from "../../../axios-client"

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/sessions/${params.sessionId}`);
        const session = res.data.data;
        console.log(session);
        return session;
    }
    catch (err) {
        console.log(err.response);
        return null;
    }
}
export default function ShowUserSession() {
    const session = useLoaderData();

    return (
        <div className="mt-2">
            <h4 className="fs-2">
                {session.title}
            </h4>
            <div>
                <small>
                    Session with {" "}
                    <span className="fw-3">
                        {session.mentor.firstName} {session.mentor.lastName}
                    </span> • {" "}
                    <a href={session.meetingLink ? session.meetingLink : ""} className="text-secondary">Meeting Link ⇗</a>
                </small>
            </div>
            <p className="time">SESSION CODE: {" "}
                <span className="text-dark">{session.sessionCode}</span>
            </p>

            <div className="mb-1">
                {session.paid ?
                    (<span className="pass">Paid</span>) :
                    (<span className="fail">Unpaid</span>)
                }
            </div>

            <hr />

            <div className="mt-1">
                <h5>Session Tasks</h5>
                <div>
                    <span className="text-secondary">No Tasks Here Yet</span>
                </div>
            </div>
        </div>
    )
}
