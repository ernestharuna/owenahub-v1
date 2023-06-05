import '../styles/home.scss'

const Home = () => {
    return (
        <div>
            <section className="hero-section">
                <div id="trailer">

                </div>
                <div id="atf">
                    <h2>
                        Online piano lessons for all skill levels.
                    </h2>
                    <p>
                        Learn the music faster with step-by-step lessons, from our courses.
                    </p>

                    <div className="benefits">
                        <span>
                            Improve your Skils</span>
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
                </div>
            </section>
        </div>
    )
}

export default Home