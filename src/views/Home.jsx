import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import '../styles/home.scss'

const Home = () => {
    return (
        <div>
            <section className="hero-section">
                <div id="trailer">

                </div>
                <div id="atf">
                    <h2>
                        Online music lessons for all skill levels.
                    </h2>
                    <p>
                        Learn the music faster with step-by-step lessons, a plethora of courses, and unlimited personal support.
                    </p>

                    <div className="benefits">
                        <span><i class="bi bi-check-lg"></i>
                            Improve your Skils
                        </span>
                        <span><i class="bi bi-check-lg"></i>
                            Learn at your own pace
                        </span>
                        <span><i class="bi bi-check-lg"></i>
                            Affordable courses
                        </span>
                    </div>


                    <button>
                        Start for Free
                    </button>

                    <small className='d-block'>
                        <i class="bi bi-stars"></i>
                        <i>Trusted by thousands of active learners</i>
                    </small>
                </div>
            </section>


            <section className="features">
                <div className="container">
                    <div className="feature-box">
                        <div>
                            <i class="bi bi-play-btn"></i>
                            <strong>Piano Lessons</strong><br />
                            <small>
                                Step-by-step video <br className="hidden" />
                                lessons on every topic.
                            </small>
                        </div>
                        <div>
                            <i class="bi bi-person-workspace"></i>
                            <strong>Artist Courses</strong><br />
                            <small>
                                Courses and live events <br className="hidden" />
                                with inspiring pianists.
                            </small>
                        </div>
                        <div>
                            <i class="bi bi-journal-bookmark"></i>
                            <strong>1000+ Lessons</strong><br />
                            <small>
                                Play your favorite songs<br className="hidden" />
                                from every style & era.
                            </small>
                        </div>
                        <div>
                            <i class="bi bi-people"></i>
                            <strong>Private Session</strong><br />
                            <small>
                                The largest community <br className="hidden" />
                                of students & teachers.
                            </small>
                        </div>
                    </div>
                </div>
            </section>

            <section className="review">
                <div className="container">
                    <div className="review-box">
                        <blockquote>
                            {"'Owena is a really fun place and resource rich for people wishing to pick up tips and tricks and gain perspective.'"}
                        </blockquote>
                        <cite>
                            Ernest Greatman
                        </cite>
                    </div>
                </div>
            </section>

            <section className="mission">
                <div className="container">
                    <h3>Get access to quality resources and instructors</h3>
                    <div className="mission-box">
                        <div className="mission-img">

                        </div>
                        <p className="mission-text">
                            It is not impossible!
                            <br /> <br />

                            All you need is proper guidance, and you'd will be unstopable. At Owena our mission
                            is to see you learn, and learn well while enjoying the process (and having fun).
                            <br /> <br />

                            Come with your enthusiasm and we will put things into realistic perspective; we provide you effective curriculums, coaching, and guidance:
                            <br /><br />

                            You’ll learn more, you’ll get better faster, and you’ll fall in love with your progress.
                            Plus you’ll have access to a library of hundreds of popular topics thought by experienced tutors.
                            <br /><br />

                            These are short, fun lessons from world-class teachers.
                            The real magic happens when you engage with with your teacher ONE-ON-ONE.

                        </p>
                    </div>
                </div>
            </section>

            <section className="video">
                <div className="container">
                    <div className="video-box">
                        <i class="bi bi-play-circle"></i>
                    </div>
                </div>
            </section>

            <section className="courses">
                <div className="container">
                    <h3>Let your learning start here</h3>
                    <p>
                        Always know exactly what to practice with an organized
                        10-level curriculum and direct access to real teachers.
                    </p>

                    <div className="courses-box">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <Link to={"#"} id='neon-button'>
                        Enroll Now
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home