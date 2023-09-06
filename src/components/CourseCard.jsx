import { Link } from "react-router-dom";
import image_1 from "../assets/home/ux-design.jpg";
import image_2 from "../assets/home/data-science.jpg";
import image_3 from "../assets/home/web-dev.jpg";




const CourseCard = ({ title, desc }) => {
    let image;
    if (title == "Become a Web Developer") {
        image = image_3;

    } else if (title == "Basics of Data Sience") {
        image = image_2;

    } else if (title == "Get Started in UX Design") {
        image = image_1;
    }

    return (
        <div className="course-card">
            <div className="course-img"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* some image */}
            </div>
            <div className="course-detail">
                <Link to="/waitlist">
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