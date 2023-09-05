import './home.scss';
import { Link } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard';

const Home = () => {
    return (
        <div>
            <section className="hero-section animated fadeInDown">
                <div id="trailer">

                </div>
                <div id="atf">
                    <h2>
                        Connect, Learn, and Thrive with OwenaHub<span className="text-purple">.</span>
                    </h2>
                    <p>
                        We provide a dynamic platform where passionate learners can seamlessly connect with experienced mentors
                    </p>

                    <div className="benefits">
                        <span><i className="bi bi-check-lg"></i>
                            Get realistic perspective
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            Improve your skills
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            Personal support
                        </span>
                    </div>

                    <Link to="/getstarted">
                        <button>
                            <i className="bi bi-caret-right-fill"></i> Register for Free
                        </button>
                    </Link>

                    <small className='d-block'>
                        <i className="bi bi-stars"></i>
                        <i>Trusted by thousands of active learners</i>
                    </small>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="feature-box">
                        <div>
                            <i className="bi bi-play-btn"></i>
                            <div>
                                <strong>Swift Sips</strong><br />
                                <span>
                                    Get into our short courses; <br className='hidden' />
                                    compact and focused.
                                </span>
                            </div>
                        </div>
                        <div>
                            <i className="bi bi-person-workspace"></i>
                            <div>
                                <strong>Expert Sessions</strong><br />
                                <span>
                                    Connect With Global Mentors <br className="hidden" />
                                    That Inspire You.
                                </span>
                            </div>
                        </div>
                        <div>
                            <i className="bi bi-journal-bookmark"></i>
                            <div>
                                <strong>Enriching Repository</strong><br />
                                <span>
                                    Access a Wealth of Informative Articles<br className="hidden" />
                                    on Owena's Blogs
                                </span>
                            </div>
                        </div>
                        <div>
                            <i className="bi bi-people"></i>
                            <div>
                                <strong>Private Session</strong><br />
                                <span>
                                    Private Sessions tailored to <br className="hidden" />
                                    your individual needs and goals.
                                </span>
                            </div>
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
                    <div className="mission-box">
                        <div className="mission-img">
                            {/* image goes here */}
                        </div>
                        <div>
                            <h3 className='mb-1'>Get access to quality resources and mentors.</h3>
                            <p className="mission-text">
                                It is not impossible!
                                <br /> <br />

                                What you need is proper mentorship, and you will be unstopable. <br /> <br />
                                OwenaHub serves as a bridge, connecting ambitious individuals like you with industry professionals who are passionate about sharing their knowledge and expertise.
                                <br /><br />
                                <span className='fw-3'>
                                    We are dedicated to offering expert advice, guidance and mentorship to learners seeking to acquire new skills and start a successful career.
                                </span>
                                <br /> <br />

                                <Link to="/getstarted">
                                    <button className="btn text-white fs-1 p-3 mt-3">
                                        <i className="bi bi-caret-right-fill"></i> Join OwenaHub
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="group-sessions">
                <div className="container">
                    <div className="group-session-box">
                        <div className="group-session-img">
                            {/* image goes here */}
                        </div>
                        <div>
                            <h3 className='mb-1'>Group mentorship sessions</h3>
                            <p className="group-session-text">
                                Meet with other learners from around the world.
                                <br /> <br />
                                OwenaHub provides a platform to where mentors can reach a large audience of enthusiastic learners.

                                <br /> <br />

                                <span>
                                    Join our vibrant group sessions of aspiring tech enthusiasts today,
                                    and participate in our <b>Q&A</b>, <b>Networking</b>, and <b>Career Advice</b>, sessions.
                                </span>
                                <br /><br />

                                <Link to="/user/sessions">
                                    <button className="btn text-white fs-1 p-3 mt-2">
                                        <i className="bi bi-caret-right-fill"></i> See Sessions
                                    </button>
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="sessions mb-2">
                <div className="container">
                    <h3>Private Sessions</h3>
                    <p>
                        <b>
                            "Unleash 10x Career Growth with Legendary Mentors!"
                        </b>
                        <br /><br />
                        Designed for quick wins - check through our list of qualified mentors <br className="hidden" />
                        and book a <i><u>Private Session</u></i> with the mentor of your choice.
                    </p>
                    <div className='private-session'>
                        <Link to="/user/sessions">
                            <button className='btn text-white p-3 fs-1 mt-2 mb-2'>
                                <i className="bi bi-caret-right-fill"></i> Book Session
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="video">
                <div className="container">
                    <div className="video-box">
                        <i className="bi bi-play-circle"></i>
                        {/* VIDEO GOES HERE */}
                    </div>
                </div>
            </section>

            <section className="social">
                <div className="container">
                    <h3>Trusted by learners everywhere.</h3>
                    <p className='text-secondary fs-small'>
                        Rated 5 stars by learners of all skill levels!
                    </p>
                    <div className="social-box">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div className="youtube">
                                <i className="bi bi-youtube"></i>
                                <strong>
                                    1,340
                                </strong>
                                <span>subscribers</span>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/owenahub?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <div className="facebook">
                                <i className="bi bi-facebook"></i>
                                <strong>
                                    800
                                </strong>
                                <span>likes</span>
                            </div>
                        </a>
                        <a href="https://instagram.com/owenahub?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                            <div className="instagram">
                                <i className="bi bi-instagram"></i>
                                <strong>
                                    30
                                </strong>
                                <span>followers</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="courses mt-3">
                <div className="container">
                    <h3>Let your learning start here</h3>
                    <p>
                        We organise our <b>Courses as Slices</b> because we make them compact and focused on  <br className="hidden" />
                        a particular topic suited to your learning needs.
                    </p>
                    <p>
                        Take a look at these popular <b>Slices  . . .</b>
                    </p>

                    <div className="courses-box">
                        <CourseCard title="Become a Web Developer" desc={"Develop your core skills, techniques,.."} />
                        <CourseCard title="Basics of Data Sience" desc={"Develop your core skills, techniques,.."} />
                        <CourseCard title="Get Started in UX Design" desc={"Develop your core skills, techniques,.."} />
                    </div>
                </div>
            </section>

            <section className="articles">
                <div className="container">
                    <div className='flex-items no-flex g-3'>
                        <div>
                            <h3>
                                Unlock the Power of Knowledge
                            </h3>
                            <p> Dive into Our Captivating Articles and Expand Your Horizons!</p>
                            <p>
                                Grab a cup of coffee, sit back, and embark on a captivating journey through our carefully crafted words.
                                <br />
                                Your next big idea awaits within these virtual pages.
                            </p>
                        </div>
                        <div className=''>
                            {/* <img src={bookIcon} alt=".." /> */}
                        </div>
                    </div>

                    <Link to={"/articles"}>
                        <button className="btn text-white fs-1 p-3 mt-2">
                            <i className="bi bi-caret-right-fill"></i> See Articles
                        </button>
                    </Link>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <Link to="/getstarted" id='neon-button'>
                        Get Started!
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home