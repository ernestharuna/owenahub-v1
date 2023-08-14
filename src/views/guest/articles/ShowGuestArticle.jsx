import { useLoaderData } from "react-router-dom";
import axiosClient from "../../../axios-client";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ShareContent from "../../../components/ShareContent";

dayjs.extend(relativeTime);

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/guest/articles/${params.articleId}`);
        const article = res.data;
        console.log(article);
        return article;
    } catch (err) {
        console.log(err);
    }
}

export default function ShowGuestArticle() {
    const article = useLoaderData();
    // const content = article[0].content.split('\n').map((line, index) => (
    //     <p key={index}>{line}</p>
    // ))

    return (
        <div>
            <section className="animated fadeInDown2 show-guest-article">

                <span className="category">{article[0].category}</span>
                <br />
                <small className="fw-2">
                    <span className="text-secondary">
                        Posted {dayjs(article[0].createdAt).fromNow()}
                    </span> {" "}
                    by {" "}
                    <span className="text-secondary">
                        <u>
                            {article[0].admin && <>{article[0].admin.firstName} {article[0].admin.lastName}</>}
                            {article[0].mentor && <>{article[0].mentor.firstName} {article[0].mentor.lastName}</>}
                            {article[0].user && <>{article[0].user.firstName} {article[0].user.lastName}</>}
                        </u>
                    </span>
                </small>

                <h2 className="text-dark fw-1 mt-1">{article[0].title}</h2>
                <p className="article-description fw-3 text-secondary mb-2">
                    {article[0].description}
                </p>

                <ShareContent />

                <div className="article-body mt-3 mb-3">
                    <div dangerouslySetInnerHTML={{ __html: article[0].content }} />
                    {/* {content} */}
                </div>
                <ShareContent />
            </section>
        </div>
    )
}
