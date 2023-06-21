import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './styles/authStyles.scss'

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const onSubmit = (data) => {
            axiosClient.post('/login', data)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    const res = err.response;
                    if (res && res.status === 422) {
                        console.log(res);
                    }
                })
        }
    }

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form container">
                    <h3>Login to OwenaHub!</h3>
                    <p>
                        Start making valuable connections with experienced mentors <br className='hidden' />
                        around the world.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("email", { required: true })}
                            className={errors.email ? 'error form-control' : 'form-control'}
                            type="email" placeholder="owena@xyz.com"
                        />

                        <input
                            {...register("password", { required: true })}
                            className={errors.password ? 'error form-control' : 'form-control'}
                            type="password" placeholder="Password"
                        />

                        <button className='form-control' id='submit'>
                            Login
                        </button>

                        <hr />

                        <Link to="/auth/register">
                            Create an account
                        </Link>
                    </form>
                </div>

                <div className="howto">
                    <div className='howto-box'>
                        <h4>Getting started is Easy!</h4>
                        <div>
                            <div className='howto-list'>
                                <span className="li">1</span>
                                Login to your account 🚀
                            </div>

                            <div className='howto-list'>
                                <span className="li">2</span>
                                Fill the session form 🥰
                            </div>

                            <div className='howto-list'>
                                <span className="li">3</span>
                                Review Upcoming Sessions🎉
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}