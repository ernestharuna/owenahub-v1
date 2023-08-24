import { Link, useLoaderData, useNavigate } from "react-router-dom";
import axiosClient from "../../../axios-client";

export default function AllArticles() {
    const articles = useLoaderData();
    const navigate = useNavigate();

    const onDelete = (article) => {
        if (window.confirm("Are you sure?")) {
            axiosClient.delete(`/articles/${article.id}`)
                .then(() => {
                    navigate('/admin/articles');
                }).catch(err => {
                    console.log(err);
                })
        }
        return
    }

    return (
        <div>
            <div className="articles-list p-2 fadeInDown animated light-blue" style={articlesList}>
                <h4>All Articles</h4>

                <div className="all-articles mt-1">
                    {
                        articles.map((article) => (
                            <div style={cardFlex} className="article-cards" key={article.id}>
                                <div>
                                    <h5>
                                        {/* {article.title} */}
                                        <Link to={`${article.id}`}>
                                            <i className="bi bi-caret-right-fill" style={color}></i> {article.title.length > 35 ? `${article.title.substring(0, 35)}...` : article.title}
                                        </Link>
                                    </h5>
                                </div>
                                <div>
                                    <span>
                                        {article.published === '1' ?
                                            (<i className="bi bi-check-circle-fill" style={color}></i>) :
                                            (<i className="bi bi-check-circle"></i>)
                                        }
                                    </span>
                                    <br />
                                    {/* <br /> */}
                                    <span className="d-inline-block">
                                        <i className="bi bi-trash" onClick={() => onDelete(article)}></i>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const articlesList = {
    border: "1px solid #e3e3e3",
    borderRadius: "5px"
}

const cardFlex = {
    display: "flex",
    margin: "0 0 0.5rem",
    padding: "0 0.5rem",
    alignItems: "center",
    borderRadius: "5px",
    borderBottom: "1px solid #e3e3e3",
    justifyContent: "space-between",
    background: "#fff"
}

const color = {
    color: "#F6A700",
}