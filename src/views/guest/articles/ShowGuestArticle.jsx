import { useLoaderData } from "react-router-dom";
import axiosClient from "../../../axios-client";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`guest/articles/${params.articleId}`);
        console.log(res.data);
        const article = res.data;
        return article;
    } catch (err) {
        console.log(err);
    }
}

export default function ShowGuestArticle() {
    const article = useLoaderData();

    return (
        <div>
            <section className="animated fadeInDown2 show-guest-article">
                <span className="category">Design</span> <br />
                <b className="time">Posted {dayjs(article[0].createdAt).fromNow()}</b>
                <h2 className="text-dark fw-1">{article[0].title}</h2>
                <div className="body">
                    {
                        article[0].content
                    }
                </div>
            </section>
        </div>
    )
}
