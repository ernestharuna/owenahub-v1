import { useState } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../../../axios-client";
import './adminAuthStyles.scss';
import { useDispatch } from "react-redux";
import { setAdmin, setToken } from "../../../features/admin/authAdminSlice";
import { Link } from "react-router-dom";


export default function AdminRegister() {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        setError(null);
        try {
            const res = await axiosClient.post('/admin/register', data);
            dispatch(setAdmin(res.data.admin));
            dispatch(setToken(res.data.token));
        } catch (err) {
            const res = err.response;
            if (res && res.status === 422) {
                setError(res.data.errors);
                console.log(error);
            }
        }
    };

    return (
        <div className="animated fadeInDown">
            <div className="form-container">
                <div className="form mt-1 container">
                    <h3>Admin Registeration</h3>
                    <p>
                        Start making valuable connections with experienced mentors <br className='hidden' />
                        around the world.
                    </p>

                    {
                        error && <div>
                            {Object.keys(error).map(key => (
                                <p key={key} className="animated fadeInDown2 form-error">- {error[key][0]}</p>
                            ))}
                        </div>
                    }

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input {...register("first_name", { required: true })}
                                className={errors.first_name ? 'error form-control' : 'form-control'}
                                type="text" placeholder="First Name"
                            />
                        </div>

                        <div className="form-control">
                            <input {...register("last_name", { required: true })}
                                className={errors.last_name ? 'error form-control' : 'form-control'}
                                type="text" placeholder="Last Name"
                            />
                        </div>

                        <div className="form-control">
                            <input {...register("email", { required: true })}
                                className={errors.email ? 'error form-control' : 'form-control'}
                                type="text" placeholder="admin@owena.com"
                            />
                        </div>

                        <div className="form-control">
                            <input {...register("password", { required: true })}
                                className={errors.password ? 'error form-control' : 'form-control'}
                                type="password" placeholder="Password"
                            />
                        </div>

                        <div className="form-control">
                            <input {...register("password_confirmation", { required: true })}
                                className={errors.password_confirmation ? 'error form-control' : 'form-control'}
                                type="password" placeholder="Password"
                            />
                        </div>

                        <button type='submit' className='form-control mt-1' id='submit' disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                            {isSubmitting ? (<span className='loader'></span>) : "Register"}
                        </button>
                    </form>
                    <hr />
                    <p>
                        Do you have an account with us? {" "}
                        <Link to="/auth/admin/login">
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
        </div >
    )
}
