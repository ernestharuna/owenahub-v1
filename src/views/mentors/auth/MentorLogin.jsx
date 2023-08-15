import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axiosClient from '../../../axios-client.js'
import { useDispatch } from 'react-redux';
import { setToken, setMentor } from '../../../features/mentor/authMentorSlice.js';

export default function MentorLogin() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        window.location.href = "/waitlist";
        return;

        setError(null);
        try {
            const res = await axiosClient.post('/mentor/login', data);
            dispatch(setMentor(res.data.mentor));
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
                <div className="form mt-2 container">
                    <h3>Login to OwenaHub!</h3>
                    <p>
                        Start making valuable contributions with learners from <br className='hidden' />
                        around the world.
                    </p>

                    {
                        error && <div>
                            {Object.keys(error).map(key => (
                                <p key={key} className="animated fadeInDown2 form-error">{error[key][0]}</p>
                            ))}
                        </div>
                    }

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input
                                {...register("email", { required: true })}
                                className={errors.email ? 'error form-control' : 'form-control'}
                                type="email" placeholder="owena@xyz.com"
                            />
                        </div>

                        <div className="form-control">
                            <input
                                {...register("password", { required: true })}
                                className={errors.password ? 'error form-control' : 'form-control'}
                                type="password" placeholder="Password"
                            />
                        </div>

                        <button type='submit' className='form-control mt-1' id='submit' disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                            {isSubmitting ? (<span className='loader'></span>) : "Login"}
                        </button>

                        <hr />

                        <p>
                            Want to join us? {" "}
                            <Link to="/auth/mentor/register" className="fw-3">
                                Create an account
                            </Link>
                        </p>
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