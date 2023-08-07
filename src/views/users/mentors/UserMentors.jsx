import { Outlet } from "react-router-dom";
import "./userMentorsStyles.scss";
import axiosClient from "../../../axios-client";

export async function loader() {
    const res = await axiosClient.get('mentors');
    const mentors = res.data.data;
    return mentors;
}

export default function UserMentors() {
    return (
        <div className="container-md animated fadeInDown">
            <h4>Mentors</h4>
            <div className="user-mentor-banner">
                <h4>Let&apos;s give you the essentials.</h4>
                <p className="text-secondary">
                    Feel free to <b>book a session</b> with a Mentor your consider a best fit for your learning journey.
                </p>
            </div>

            <div className="animated2 fadeInDown">
                <Outlet />
            </div>
        </div>
    )
}