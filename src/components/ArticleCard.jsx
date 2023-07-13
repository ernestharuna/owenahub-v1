import { Link } from "react-router-dom"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ArticleCard = ({ article }) => {
    return (
        <Link to={`/articles/${article.id}`}>
            <div className="article-card p-2">
                <span className="category">{article.category}</span> — <b className="time">Posted {dayjs(article.createdAt).fromNow()}</b>
                <h4>{article.title}</h4>
                <span className="description">
                    {article.description.length > 45 ? `${article.description.substring(0, 45)}...` : article.description}
                </span>
            </div>
        </Link>
    )
}

export default ArticleCard