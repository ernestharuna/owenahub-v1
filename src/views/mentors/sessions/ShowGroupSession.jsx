import axiosClient from "../../../axios-client"

export async function loader({ params }) {
    const res = await axiosClient.get(`/group-sessions/${params.groupSessionId}`);
    const groupSession = res.data.data;
    console.log(groupSession);
    return groupSession;
}

export default function ShowGroupSession() {
    return (
        <div>ShowGroupSession</div>
    )
}
