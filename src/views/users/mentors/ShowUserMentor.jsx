import axiosClient from "../../../axios-client"

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/mentors/${params.mentorId}`);
        const mentor = res.data;
        console.log(mentor);
        return null
    } catch (err) {

    }
}

export default function ShowUserMentor() {
    return (
        <div>ShowUserMentor</div>
    )
}
