export default function LargeMentorCard() {
    return (
        <div className="large-mentor-card">
            <div className="large-mentor-card-box">
                {/* Mentors Image */}
            </div>
            <span className="fw-2 mt-1 d-block">Ernest Haruna</span>
            <small className="mt-1 d-block text-secondary fw-2">
                <i class="bi bi-briefcase-fill"></i> Full-stack developer <br />
                <i class="bi bi-tools"></i> 6 Years Expereince &middot; 12 Sessions <br />
            </small>

            <button className="btn btn-black mt-2">
                Book Now
            </button>
        </div>
    )
}