import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './authStyles.scss'
import { useState } from 'react';
import axiosClient from '../../../axios-client.js'
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../../features/user/authUserSlice';


export default function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        setError(null);
        try {
            const res = await axiosClient.post('/login', data);
            dispatch(setUser(res.data.user));
            dispatch(setToken(res.data.token));
        } catch (err) {
            const res = err.response;
            if (res && res.status) {
                if (res.data.errors) {
                    setError(res.data.errors)
                } else {
                    setError({
                        error: [res.data.message]
                    })
                }
            }
        }
    }

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form mt-3 container">
                    <h3>Login to OwenaHub!</h3>
                    <p>
                        Start making valuable connections with experienced mentors <br className='hidden' />
                        around the world.
                    </p>

                    {
                        error && <div className="form-error">
                            {Object.keys(error).map(key => (
                                <p key={key}>- {error[key][0]}</p>
                            ))}
                        </div>
                    }

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

                        <button type='submit' className='form-control' id='submit' disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                            {isSubmitting ? (<span className='loader'></span>) : "Login"}
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