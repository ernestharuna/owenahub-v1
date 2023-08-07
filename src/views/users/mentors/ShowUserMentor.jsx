import { Link, useLoaderData } from "react-router-dom";
import axiosClient from "../../../axios-client"

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/mentors/${params.mentorId}`);
        const mentor = res.data.data;
        console.log(mentor);
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
                <h4>
                    {mentor.firstName} {mentor.lastName}
                </h4>
            </div>

            <div>
                <Link to={"/user/sessions/create"}>
                    <button className="btn">
                        Request Session
                    </button>
                </Link>
            </div>
        </div>
    )
}
