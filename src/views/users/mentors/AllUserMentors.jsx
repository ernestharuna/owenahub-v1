import LargeMentorCard from "../../../components/LargeMentorCard";
import { useLoaderData } from "react-router-dom";

export default function AllUserMentors() {
    const mentors = useLoaderData();

    return (
        <div className="mt-2">
            <h5>Your top matches</h5>
            <div>
                {mentors.length === 0 ?
                    (<p>There are no mentors available at the moment</p>) :
                    (mentors.map((mentor) =>
                        (<LargeMentorCard key={mentor.id} mentor={mentor} />)
                    ))
                }
            </div>
        </div>
    )
}