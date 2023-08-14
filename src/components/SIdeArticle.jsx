import { Link } from "react-router-dom"

export default function SIdeArticle({ article }) {
    return (
        <Link to={`/articles/${article.id}`}>
            <div style={sideArticle}>
                <p className='m-0 fw-2'>
                    <i className="bi bi-chevron-double-right"></i> {article.title}
                </p>
                <small className="text-secondary">
                    {article.description}
                </small>
            </div>
        </Link>
    )
}

const sideArticle = {
    background: "#F4F5F6",
    padding: "0.3rem 0.6rem",
    borderRadius: "0.5rem",
    margin: "0.5rem 0",
    boxShadow: "0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2)",
}
