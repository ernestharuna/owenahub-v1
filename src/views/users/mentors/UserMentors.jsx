import { Outlet } from "react-router-dom";
import "./userMentorsStyles.scss";

export async function loader() {
    return null;
}

export default function UserMentors() {
    return (
        <div className="container-md">
            <h4>Mentors</h4>
            <div className="user-mentor-banner">
                <h4>Let's give you the essentials.</h4>
                <p className="text-secondary">
                    Feel free to book a session with a Mentor your consider a best fit for your learning journey.
                </p>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}