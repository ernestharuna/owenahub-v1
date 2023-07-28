import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios-client'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setMentor } from '../../../features/mentor/authMentorSlice';

export default function MentorRegister() {
    const [next, setNext] = useState(false); //controls what part of the form is displayed
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        setError(null);
        if (!data.first_name || !data.last_name || !data.email) {
            setNext(false);
        }
        try {
            const res = await axiosClient.post('/mentor/register', data);
            console.log(res.data);
            dispatch(setMentor(res.data.mentor))
            dispatch(setToken(res.data.token))
        } catch (err) {
            console.log(err);
            const res = err.response;
            if (res && res.status === 422) {
                setError(res.data.errors);
            }
        }

    };

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form mt-2 mb-2 container">
                    <h3>Join OwenaHub!</h3>
                    <p>
                        Join OwenaHub's community of mentors in shaping the career of <br />
                        enthusiastic learners.
                    </p>

                    {
                        error && <div>
                            {Object.keys(error).map(key => (
                                <p key={key} className="animated fadeInDown2 form-error">{error[key][0]}</p>
                            ))}
                        </div>
                    }

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            !next &&
                            (<div className='animated fadeInDown2'>
                                {/* first name */}
                                <div className="form-control">
                                    <input
                                        {...register("first_name", { required: true })}
                                        className={errors.first_name ? 'error form-control' : 'form-control'}
                                        type="text" placeholder="First Name"
                                    />
                                </div>

                                {/* last name */}
                                <div className="form-control">
                                    <input
                                        {...register("last_name", { required: true })}
                                        className={errors.last_name ? 'error form-control' : 'form-control'}
                                        type="text" placeholder="Last Name"
                                    />
                                </div>

                                {/* Gender */}
                                <div className="form-control">
                                    <select className='form-control' {...register("gender", { required: true })}>
                                        <option value="Male" defaultChecked>Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* email */}
                                <div className="form-control">
                                    <input
                                        {...register("email", { required: true })}
                                        className={errors.email ? 'error form-control' : 'form-control'}
                                        type="email" placeholder="owena@xyz.com"
                                    />
                                </div>
                            </div>)
                        }

                        {/* ------------- next */}
                        {
                            next &&
                            (<div className='animated fadeInDown2'>
                                {/* Field */}
                                <div className="form-control">
                                    <select className='form-control' {...register("field", { required: true })}>
                                        <option value="" defaultChecked>Field of Experience</option>
                                        <option value="Frontend Developer">Frontend Developer</option>
                                        <option value="Backend Developer">Backend Developer</option>
                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Full-stack Developer">Full-stack Developer</option>
                                        <option value="Career Coach">Career Coach</option>
                                        <option value="Product Manager">Product Manager</option>
                                    </select>
                                </div>

                                {/* Years of experience */}
                                <div className="form-control">
                                    <input
                                        {...register("exp_years", { required: true, min: 0 })}
                                        className={errors.exp_years ? 'error form-control' : 'form-control'}
                                        type="number" placeholder="Years of experience"
                                    />
                                </div>

                                {/* password */}
                                <div className="form-control">
                                    <input
                                        {...register("password", { required: true })}
                                        className={errors.password ? 'error form-control' : 'form-control'}
                                        type="password" placeholder="Password"
                                    />
                                </div>

                                {/* password confirmation */}
                                <div className="form-control">
                                    <input
                                        {...register("password_confirmation", { required: true })}
                                        className={errors.password_confirmation ? 'error form-control' : 'form-control'}
                                        type="password" placeholder="Confirm Password"
                                    />
                                </div>

                                <button type='submit' className='form-control mt-1' id='submit' disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                                    {isSubmitting ? (<span className='loader'></span>) : "Register"}
                                    {/* <span className='loader' style={{ cursor: 'wait' }}></span> */}
                                </button>
                            </div>)
                        }
                    </form>

                    {/* Next Button */}
                    <button onClick={() => { setNext(!next) }} id='next-btn' className='mt-1'>
                        {next === false ? "Continue" : "Back"}
                    </button>

                    <hr />

                    <p>
                        Do you have an account with us? {" "}
                        <Link to="/auth/mentor/login" className='fw-3'>
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