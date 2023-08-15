import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { addMessage, removeMessage } from "../../../features/notification/notificationSlice";
import { useDispatch } from "react-redux";

export default function WaitList() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        dispatch(addMessage("The feeature you tried is still being built."));
        setTimeout(() => dispatch(removeMessage()), 5000);
    }, []);

    const onSubmit = async (data) => {
        setError(null);
        try {
            await axiosClient.post('/guest/waitlist/create', data)
                .then(({ data }) => {
                    dispatch(addMessage(data.message));
                    setTimeout(() => dispatch(removeMessage()), 8000);
                    navigate("/articles");
                });
        } catch (err) {
            const res = err.response;
            if (res && res.status === 422) {
                setError(res.data.errors);
            }
        }
    }

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form mt-3 container">
                    <h3>Join the Waitlist!</h3>
                    <p className="text-secondary">
                        Be the first to be notified when new features are introduced <br className='hidden' />
                        to OwenaHub.
                    </p>

                    {error && <div>
                        {Object.keys(error).map(key => (
                            <p key={key} className="animated fadeInDown2 form-error">{error[key][0]}</p>
                        ))}
                    </div>}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
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
                            {isSubmitting ? (<span className='loader'></span>) : "Join Waitlist"}
                            {/* <span className='loader' style={{ cursor: 'wait' }}></span> */}
                        </button>
                    </form>
                    <hr />
                    <p>
                        Want to join us? {" "}
                        <Link to="/auth/register" className="fw-3">
                            Create an account
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
                                    <b>Help Shape the Product:</b> Your input matters! We value feedback from our waitlist community and will consider your suggestions as we refine and improve OwenaHub.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
