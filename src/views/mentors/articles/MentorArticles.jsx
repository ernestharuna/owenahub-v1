import { Link } from "react-router-dom"

export default function MentorArticles() {
    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Articles
            </h4>

            <div className="user-slices-banner mt-2">
                <h4>Manage your articles repo</h4>
                <p className="text-secondary">
                    Share your experiences and expert opinions on OwenaHub's blog.
                </p>
            </div>

            <p>
                Join the waitlist and be notified when articles for mentors become available.
            </p>
            <Link to={"/waitlist"}>
                <button className="btn">
                    Join Waitlist
                </button>
            </Link>
        </div>
    )
}
