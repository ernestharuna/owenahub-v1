import { Link } from "react-router-dom"

const CourseCard = () => {
    return (
        <div className="course-card">
            <div className="course-img">
                {/* <img src={article.urlToImage ? article.urlToImage : "#"} alt="..." /> */}
            </div>
            <div className="course-detail">
                <Link to="#">
                    <h4>
                        Introduction to Piano playing.
                    </h4>
                    <p>
                        Develop your core skills, techniques,..
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default CourseCard