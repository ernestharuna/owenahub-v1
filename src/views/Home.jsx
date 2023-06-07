import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import '../styles/home.scss'
import ArticleCard from '../components/ArticleCard'

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
                            Improve your skils
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

            <section className="social">
                <div className="container">
                    <h3>Trusted by learners everywhere.</h3>
                    <p>
                        Rated 5 stars by musicians of all skill levels!
                    </p>
                    <div className="social-box">
                        <div className="youtube">
                            <i class="bi bi-youtube"></i>
                            <strong>
                                1.2M
                            </strong>
                            <span>subscribers</span>
                        </div>
                        <div className="facebook">
                            <i class="bi bi-facebook"></i>
                            <strong>
                                422k
                            </strong>
                            <span>likes</span>
                        </div>
                        <div className="instagram">
                            <i class="bi bi-instagram"></i>
                            <strong>
                                123k
                            </strong>
                            <span>followers</span>
                        </div>
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
                    </div>
                </div>
            </section>

            <section className="articles">
                <div className="container">
                    <h3>
                        Unlock the Power of Knowledge
                    </h3>
                    <p> Dive into Our Captivating Articles and Expand Your Horizons!</p>

                    <div className="articles-box">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
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

            <section className="sessions">
                <div className="container">
                    <h3>Exclusive sessions and In-person Classes</h3>
                    <p>
                        We believe in the power of personalized learning experiences and the value they bring to your growth and development.
                        <br /> Whether you prefer one-on-one interactions or the energy of in-person gatherings, we have tailored sessions and classes that will cater to your unique needs and learning style.
                    </p>
                    <div className='private-session'>
                        <h4>Private Sessions</h4>
                        <p>
                            Our private sessions are designed to provide you with a customized and focused learning environment. You will have the undivided attention of our expert instructors, allowing for personalized instruction and guidance tailored specifically to your goals and aspirations.
                            Whether you're looking to deepen your knowledge in a particular subject, refine your skills, or gain a competitive edge, our private sessions are the perfect opportunity to accelerate your learning journey.
                        </p>
                        <ol>
                            <li>
                                <b>Personalized Attention:</b><br />
                                Experience one-on-one guidance from our skilled instructors, who will adapt the content to suit your individual needs.
                            </li>

                            <li>
                                <b>Flexible Scheduling:</b><br />
                                We understand the importance of convenience, so we offer flexible scheduling options to accommodate your busy lifestyle.
                            </li>

                            <li>
                                <b>Targeted Learning:</b><br />
                                Focus on specific areas of interest, allowing you to delve deeper into subjects that matter most to you.
                            </li>

                            <li>
                                <b>Rapid Progress:</b><br />
                                With personalized instruction and tailored feedback, you can make significant progress in a shorter period.
                            </li>
                        </ol>
                        <button>
                            Book a session now
                        </button>
                    </div>
                    <hr />
                    <div className='in-person'>
                        <h4>In-Person Classes</h4>
                        <p>
                            Nothing can replace the energy and connection that comes from being part of a vibrant learning community.
                            Our in-person classes provide a collaborative environment where you can engage with like-minded individuals, share ideas, and benefit from the collective knowledge and experiences of your peers and instructors.
                        </p>
                        <ol>
                            <li>
                                <b>Community Building:</b> <br />
                                Connect with a diverse community of learners who share your passion, fostering a sense of camaraderie and support.
                            </li>
                            <li>
                                <b>Interactive Learning:</b> <br />
                                Engage in group discussions, participate in hands-on activities, and benefit from real-time feedback and interaction.
                            </li>
                            <li>
                                <b>Networking Opportunities:</b> <br />
                                Expand your professional network and create lasting connections with fellow learners who may become valuable collaborators or mentors.
                            </li>
                            <li>
                                <b>Immersive Experience:</b> <br />
                                Immerse yourself in the learning process, away from distractions, and create a focused environment that fosters deep understanding and growth.
                            </li>
                        </ol>
                        <button>
                            Book a session now
                        </button>
                    </div>
                </div>
            </section>

            <section className="faq">
                <div className="container">

                </div>
            </section>
        </div>
    )
}

export default Home