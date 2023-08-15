import { Link } from "react-router-dom"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ArticleCard = ({ article }) => {
    return (
        <Link to={`/articles/${article.id}`}>
            <div className="article-card p-2">
                <div className="article-desc">
                    <span className="category">{article.category}</span> - {" "}
                    <span className="text-secondary time">{dayjs(article.createdAt).format('MMMM D, YYYY')}</span>
                </div>
                <h4 className="">{article.title}</h4>
                <i className="description">
                    {article.description.length > 45 ? `${article.description.substring(0, 45)}...` : article.description}
                </i>
            </div>
        </Link>
    )
}

export default ArticleCard