import LargeMentorCard from "../../../components/LargeMentorCard";

export default function AllUserMentors() {
    return (
        <div className="mt-2">
            <h5>Your top matches</h5>
            <div>
                <LargeMentorCard />
                <LargeMentorCard />
                <LargeMentorCard />
                <LargeMentorCard />
                <LargeMentorCard />
            </div>
        </div>
    )
}