import './home.scss';
import bookIcon from '../../../assets/home/book.png';
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
                    <h3>Get access to quality resources and mentors.</h3>
                    <div className="mission-box">
                        <div className="mission-img">

                        </div>
                        <p className="mission-text">
                            It is not impossible!
                            <br /> <br />

                            All you need is proper mentorship, and you'd will be unstopable. <br /> <br />
                            OwenaHub serves as a bridge, connecting ambitious individuals like you with industry professionals who are passionate about sharing their knowledge and expertise.
                            <br /><br />
                            <b>We are dedicated to offering expert advice, guidance and mentorship to learners seeking to acquire new skills and start a successful career.</b>
                            <br /> <br />

                            Come with your enthusiasm and we will put things into realistic perspective.
                            <br /><br />

                            You’ll start strong and grow fast, and you’ll fall in love with your progress.
                            Plus you’ll have access to a library of hundreds of popular topics thought by experienced tutors.
                            <br /><br />

                            The real magic happens when you engage with with your mentors ONE-ON-ONE.
                        </p>
                    </div>
                </div>
            </section>

            <section className="video">
                <div className="container">
                    <div className="video-box">
                        <i className="bi bi-play-circle"></i>
                    </div>
                </div>
            </section>

            <section className="social">
                <div className="container">
                    <h3>Trusted by learners everywhere.</h3>
                    <p>
                        Rated 5 stars by learners of all skill levels!
                    </p>
                    <div className="social-box">
                        <div className="youtube">
                            <i className="bi bi-youtube"></i>
                            <strong>
                                1.2M
                            </strong>
                            <span>subscribers</span>
                        </div>
                        <div className="facebook">
                            <i className="bi bi-facebook"></i>
                            <strong>
                                422k
                            </strong>
                            <span>likes</span>
                        </div>
                        <div className="instagram">
                            <i className="bi bi-instagram"></i>
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
                        We organise our <b>Courses as Slices</b> because we make them compact and focused on  <br className="hidden" />
                        a particular topic suited to your learning needs.
                    </p>
                    <p>
                        Take a look at these popular <b>Slices  . . .</b>
                    </p>

                    <div className="courses-box">
                        <CourseCard title="Become a Web Developer" desc={"Develop your core skills, techniques,.."} />
                        <CourseCard title="Basics of Data Sience" desc={"Develop your core skills, techniques,.."} />
                        <CourseCard title="Get Started in Digital Marketing" desc={"Develop your core skills, techniques,.."} />
                    </div>
                </div>
            </section>

            <section className="articles">
                <div className="container">
                    <div className='flex-items no-flex'>
                        <div>
                            <h3>
                                Unlock the Power of Knowledge
                            </h3>
                            <p> Dive into Our Captivating Articles and Expand Your Horizons!</p>
                            <p>
                                From thought-provoking analyses to practical tips, our articles offer a wealth of information that will empower you to take your business to new heights.
                                <br /> <br />
                                Whether you're a seasoned entrepreneur or just starting out, these articles are your compass, guiding you towards growth and prosperity.
                                So, grab a cup of coffee, sit back, and embark on a captivating journey through our carefully crafted words. Your next big idea awaits within these virtual pages.
                                <br /> <br />
                                Start reading and unlock the potential of your business today!
                            </p>
                        </div>
                        <div className=''>
                            <img src={bookIcon} alt=".." />
                        </div>
                    </div>

                    <Link to={"/articles"}>
                        <button className="btn text-white fs-1 p-2">
                            <i className="bi bi-caret-right-fill"></i> Start Reading
                        </button>
                    </Link>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <Link to="/auth/register" id='neon-button'>
                        Get Started!
                    </Link>
                </div>
            </section>

            <section className="sessions">
                <div className="container">
                    <h3>Exclusive Learning</h3>
                    <p>
                        We believe in the power of personalized learning experiences and the value they bring to your growth and development.
                        <br /> There are tailored sessions that will cater to your unique needs and learning style.
                    </p>
                    <div className='private-session'>
                        <h4>Private Sessions</h4>
                        <p>
                            Our private sessions are designed to provide you with a customized and focused learning environment. <br />
                            You will have the undivided attention of our expert mentors,
                            allowing for personalized instruction and guidance tailored specifically to your goals and aspirations. <br /> <br />
                            Whether you're looking to deepen your knowledge in a particular subject, refine your skills, or gain a competitive edge, our private sessions are the perfect opportunity to accelerate your learning journey.
                        </p>
                        <ol>
                            <li>
                                <b>Personalized Attention:</b><br />
                                Experience one-on-one guidance from our skilled mentors, who will adapt the content to suit your individual needs.
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
                        <Link to="/user/sessions">
                            <button className='btn text-white p-2 fs-1'>
                                <i className="bi bi-caret-right-fill"></i>  Create a Session
                            </button>
                        </Link>
                    </div>
                    {/* <hr />
                    <div className='in-person'>
                        <h4>In-Person Classes</h4>
                        <p>
                            Nothing can replace the energy and connection that comes from being part of a vibrant learning community. <br /><br />
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
                        <Link to="/user/dashboard">
                            <button className='btn text-white p-2 fs-1'>
                                Book a session now
                            </button>
                        </Link>
                    </div> */}
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