import { useLoaderData } from "react-router-dom";
import axiosClient from "../../../axios-client"

export async function loader({ params }) {
    const res = await axiosClient.get(`/articles/${params.articleId}`);
    const article = res.data.data;
}

export default function ShowGuestArticle() {
    const article = useLoaderData();

    return (
        <div>
            ShowGuestArticle
        </div>
    )
}
