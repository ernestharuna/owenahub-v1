import './styles/authStyles.scss'

export default function Register() {
    const onSubmit = () => {

    }

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form container">
                    <h3>Welcome to OwenaHub!</h3>
                    <p>
                        Start making valuable connections with experienced mentors <br className='hidden' />
                        around the world.
                    </p>
                    <form onSubmit={onSubmit}>
                        <input className='form-control' type="text" placeholder="First Name" />
                        <input className='form-control' type="text" placeholder="Last Name" />
                        <input className='form-control' type="email" placeholder="owena@xyz.com" />
                        <input className='form-control' type="password" placeholder="Password" />
                        <input className='form-control' type="password" placeholder="Confirm Password" />

                        <button className='form-control' id='submit'>
                            Register
                        </button>
                    </form>
                </div>

                <div className="howto">
                    <div className='howto-box'>
                        <h4>Getting started is Easy!</h4>
                        <div>
                            <div className='howto-list'>
                                <span className="li">1</span>
                                Create an account 🚀
                            </div>

                            <div className='howto-list'>
                                <span className="li">2</span>
                                Verify Your Email 🥰
                            </div>

                            <div className='howto-list'>
                                <span className="li">3</span>
                                Book a Session 🎉
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}