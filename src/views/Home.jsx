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
                        Learn the music faster with step-by-step lessons, from our courses.
                    </p>

                    <div className="benefits">
                        <span>
                            Improve your Skils
                        </span>
                        <span>
                            Learn at your own pace
                        </span>
                        <span>
                            Affordable courses
                        </span>
                    </div>


                    <button>
                        Start for Free
                    </button>

                    <small className='d-block'>
                        <i>Trusted by thousands of active learners</i>
                    </small>
                </div>
            </section>


            <section className="features">
                <div className="container">
                    <div className="feature-box">
                        <div>
                            <strong>Piano Lessons</strong><br />
                            <small>
                                Step-by-step video <br className="hidden" />
                                lessons on every topic.
                            </small>
                        </div>
                        <div>
                            <strong>Artist Courses</strong><br />
                            <small>
                                Courses and live events <br className="hidden" />
                                with inspiring pianists.
                            </small>
                        </div>
                        <div>
                            <strong>1000+ Lessons</strong><br />
                            <small>
                                Play your favorite songs<br className="hidden" />
                                from every style & era.
                            </small>
                        </div>
                        <div>
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
                        <p className="mission-text">
                            It is not impossible!
                            <br /> <br />

                            All you need is proper guidance, and you'd will be unstopable. At Owena our mission
                            is to see you learn, and learn well while enjoying the process (and having fun).
                            <br /> <br />



                        </p>
                        <div className="mission-img">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home