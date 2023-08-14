import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/sessions/${params.sessionId}`);
        const session = res.data.data;
        console.log(session);
        return session;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export default function ShowMentorSessions() {
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
                        {session.mentee.firstName} {session.mentee.lastName}
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
            <div>
                <span>
                    <b>Learning Objective:</b><br />
                    <span className="text-secondary">{session.description}</span>
                </span>
            </div>

            <div className="mt-2">
                <b>Learning Objective:</b><br />
                <div>
                    <span className="text-secondary">No Tasks Here Yet</span>
                    <br /><br />
                    <button className="btn text-white">
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    )
}
