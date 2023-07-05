export default function AllArticles() {
    return (
        <div>
            <div className="articles-list p-2 fadeInDown animated" style={articlesList}>
                <h4>All Articles</h4>
            </div>
        </div>
    )
}

const articlesList = {
    background: "#F7FAFC",
    border: "1px solid #e3e3e3",
    borderRadius: "5px"
}