import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios-client.js'
import './styles/authStyles.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../../features/user/authUserSlice.js';

export default function Register() {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        setError(null);
        try {
            const res = await axiosClient.post('/register', data);
            dispatch(setUser(res.data.user))
            dispatch(setToken(res.data.token))
        } catch (err) {
            const res = err.response;
            if (res && res.status === 422) {
                setError(res.data.errors);
            }
        }
    };

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form container">
                    <h3>Welcome to OwenaHub!</h3>
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
                            {...register("first_name", { required: true })}
                            className={errors.first_name ? 'error form-control' : 'form-control'}
                            type="text" placeholder="First Name"
                        />

                        <input
                            {...register("last_name", { required: true })}
                            className={errors.last_name ? 'error form-control' : 'form-control'}
                            type="text" placeholder="Last Name"
                        />

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

                        <input
                            {...register("password_confirmation", { required: true })}
                            className={errors.password_confirmation ? 'error form-control' : 'form-control'}
                            type="password" placeholder="Confirm Password"
                        />

                        <button type='submit' className='form-control' id='submit' disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                            {isSubmitting ? (<span className='loader'></span>) : "Register"}
                            {/* <span className='loader' style={{ cursor: 'wait' }}></span> */}
                        </button>
                    </form>
                    <hr />
                    <p>
                        Do you have an account with us? {" "}
                        <Link to="/auth/login">
                            Login here
                        </Link>
                    </p>
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