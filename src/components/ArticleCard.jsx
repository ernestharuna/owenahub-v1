import { Link } from "react-router-dom"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ArticleCard = ({ title, content, time }) => {
    return (
        <div className="article-card">
            <b className="time">{dayjs(time).fromNow()}</b>
            <h4>{title}</h4>
            <small>
                {content.length > 45 ? `${content.substring(0, 45)}...` : content}
                <br /><Link>Read more »</Link>
            </small>
        </div>
    )
}

export default ArticleCard