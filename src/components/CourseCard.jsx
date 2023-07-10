import { Link } from "react-router-dom"

const CourseCard = ({ title, desc }) => {
    return (
        <div className="course-card">
            <div className="course-img">
                {/* <img src={article.urlToImage ? article.urlToImage : "#"} alt="..." /> */}
            </div>
            <div className="course-detail">
                <Link to="#">
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {desc}
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default CourseCard