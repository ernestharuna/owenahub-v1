import { useLoaderData } from "react-router-dom";
import axiosClient from "../../../axios-client";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/articles/${params.articleId}`);
        const article = res.data;
        return article;
    } catch (err) {
        console.log(err);
    }
}

export default function ShowArticle() {
    const article = useLoaderData();

    // const content = article[0].content.split('\n').map((line, index) => (
    //     <p key={index}>{line}</p>
    // ))

    return (
        <div>
            <section className="animated fadeInDown">
                <span className="category">{article[0].category}</span> <br />
                <b className="time">Posted {dayjs(article[0].createdAt).fromNow()}</b>

                <h2 className="text-dark fw-1 mt-1">{article[0].title}</h2>

                <div className="article-body mt-1">
                    <div dangerouslySetInnerHTML={{ __html: article[0].content }} />
                    {/* {content} */}
                </div>
            </section>
        </div>
    )
}
