import { useState } from "react"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function WaitList() {
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form mt-2 container">
                    <h3>Join the Waitlist!</h3>
                    <p>
                        Be the first to be notified when new features are introduced<br className='hidden' />
                        to OwenaHub.
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
                            {/* <label htmlFor="category">Category</label> */}
                            <select id="category" className={errors.interest ? 'error form-control' : 'form-control'} {...register("interest", { required: true })}>
                                <option value={null} disabled={true}>Select your interest</option>
                                <option value="Web Development">Web Development</option>
                                <option value="UX Design">UX Design</option>
                                <option value="Slices">Slices</option>
                                <option value="Product Management">Product Management</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <input
                                {...register("name", { required: true })}
                                className={errors.name ? 'error form-control' : 'form-control'}
                                type="text" placeholder="Name"
                            />

                        </div>

                        <div className="form-control">
                            <input
                                {...register("email", { required: true })}
                                className={errors.email ? 'error form-control' : 'form-control'}
                                type="email" placeholder="owena@xyz.com"
                            />
                        </div>


                        <button type='submit' className='form-control mt-1' id='submit' disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
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
                        <h4>Why join the waitlist?</h4>
                        <div>
                            <div className='howto-list'>
                                <span className="li">1</span>
                                <span>
                                    <b>Priority Access:</b> Be the first to experience new features before it's available to the public.
                                    Get a head start and secure your spot!
                                </span> 🚀
                            </div>

                            <div className='howto-list'>
                                <span className="li">2</span>
                                <span>
                                    <b>Stay Informed:</b> Receive regular updates on our progress, new features, and exciting developments.
                                    You'll be at the forefront of the latest news!
                                </span>
                            </div>

                            <div className='howto-list'>
                                <span className="li">3</span>
                                <span>
                                    <b>Help Shape the Product:</b>
                                    Your input matters! We value feedback from our waitlist community and will consider your suggestions as we refine and improve OwenaHub.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
