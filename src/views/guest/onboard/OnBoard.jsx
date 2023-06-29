import { Link } from 'react-router-dom'
import './onboard.scss'

export default function OnBoard() {
    return (
        <div>
            <div className="container">
                <h3 className='mx-2'>How do you want to join?</h3>

                <div className="onboard">
                    <div className="onboard-card mb-1 fadeInDown animated">
                        <h4>As Mentor</h4>
                        <hr />
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                        <button>
                            Get Started
                        </button>
                    </div>

                    <div className="onboard-card mb-1 fadeInDown2 animated2">
                        <h4>As Mentee</h4>
                        <hr />
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
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
