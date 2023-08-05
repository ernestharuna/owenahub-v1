import { Link } from 'react-router-dom'
import './onboard.scss'

export default function OnBoard() {
    return (
        <div>
            <div className="container">
                <h3 className='mt-2'>How do you want to join?</h3>

                <div className="onboard mb-2">
                    <div className="onboard-card mb-1 fadeInDown animated">
                        <h4>As Mentor</h4>
                        <hr />
                        <p>
                            Join OwenaHub's community of mentors in shaping the career of <br />
                            enthusiastic learners.
                        </p>
                        <ul>
                            <li>Share inspiring articles with the community.</li>
                            <li>Mentor a plethora of people from different backgrounds.</li>
                            <li>Get paid for sharing your expertise, and growing talents.</li>
                        </ul>
                        <Link to={"/auth/mentor/register"} >
                            <button>
                                Get Started
                            </button>
                        </Link>
                    </div>

                    <div className="onboard-card mb-1 animated2 fadeInDown">
                        <h4>As Learner</h4>
                        <hr />
                        <p>
                            Open the door to meeting mentors that inspire your creativity <br />
                            and give you realistic perspective.
                        </p>
                        <ul>
                            <li>Book Sessions with any available mentors.</li>
                            <li>Share your learning story with the community.</li>
                            <li>Be featured on our talents space.</li>
                        </ul>
                        <Link to={"/auth/register"}>
                            <button>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
