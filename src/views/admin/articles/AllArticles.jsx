import { useLoaderData } from "react-router-dom"

export default function AllArticles() {
    const articles = useLoaderData();
    console.log(articles);

    return (
        <div>
            <div className="articles-list p-2 fadeInDown animated light-blue" style={articlesList}>
                <h4>All Articles</h4>

                <div className="all-articles mt-1">
                    {
                        articles.map((article) => (
                            <div key={article.id} style={cardFlex} className="article-cards">
                                <div>
                                    <h5>{article.title}</h5>
                                </div>
                                <div>
                                    <span>
                                        {article.published === '1' ? "published" : "unpublished"}
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