export default function MentorsCard({ mentor }) {
    return (
        <div className="flex-items flex-wrap p-2 mt-1 mentor-card">
            <div className="mentor-box">
                <div className="picture">

                </div>
                <div className="detail">
                    <div className="name fw-2">{mentor.firstName} {mentor.lastName}</div>
                    <small>{mentor.field}</small>
                </div>
            </div>
            <div className="badge">
                <i className="bi bi-award fs-2"></i>
            </div>
        </div>
    )
}

const pictureStyle = {

}
