import { Link } from "react-router-dom"

const ArticleCard = () => {
    return (
        <div className="article-card">
            <b className="time">Posted 2 months ago</b>
            <h4>How to start a music career</h4>
            <small>This is for youg musicians w.... <Link>Read more »</Link></small>
        </div>
    )
}

export default ArticleCard