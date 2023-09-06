import { Outlet, Link, useNavigation, useNavigate } from "react-router-dom";
import logo from '../assets/owena_logo.png'
import { useDispatch, useSelector } from "react-redux";
import { addMessage, removeMessage } from "../features/notification/notificationSlice";
import { useEffect, useState } from "react";
import Backdrop from "../components/Backdrop";
import { useForm } from "react-hook-form";
import axiosClient from "../axios-client";

const GuestLayout = () => {
    const navigation = useNavigation();
    const { message } = useSelector(state => state.notification);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        if (!localStorage.getItem('owenahub_newsletter')) {
            setTimeout(() => {
                document.body.style.overflow = 'hidden';
                setModal(true);
            }, 10000)
        }
    }, [])

    const onSubmit = async (data) => {
        // console.log(data);
        await axiosClient.post('/guest/waitlist/create', data)
            .then(({ data }) => {
                dispatch(addMessage(data.message));
                setTimeout(() => dispatch(removeMessage()), 8000);

                setModal(false);

                localStorage.setItem('owenahub_newsletter', 'subscribed');
                document.body.style.overflow = 'auto';
                navigate("/articles");
            })
            .catch((err) => {
                const status = err.response.status;
                if (status === 422) {
                    dispatch(addMessage("Email exists | Continue exploring!"));
                    setTimeout(() => dispatch(removeMessage()), 8000);

                    setModal(false);

                    localStorage.setItem('owenahub_newsletter', 'subscribed');
                    document.body.style.overflow = 'auto';
                    navigate("/articles");
                }
            })
    }

    return (
        <>
            <header>
                <nav>
                    <div id="nav-list">
                        <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        <Link>
                            <h1>OwenaHub</h1>
                        </Link>
                    </div>

                    <div className="large-screen">
                        <small className="cursive">
                            The Learner's Hub
                        </small>
                    </div>

                    <div className="auth-btns">
                        <Link to={"/auth/login"}>
                            <span className="sign-in fw-2">
                                Sign in
                            </span>
                        </Link>
                        <Link to={"/getstarted"}>
                            <span className="register">
                                Register
                            </span>
                        </Link>
                    </div>
                </nav>
            </header>

            <main className={navigation.state === "loading" ? " loading" : ""}>
                <Outlet />
            </main>

            <footer>
                <div className="container">
                    <h1>OwenaHub</h1>
                    <div id="footer-quote">
                        <div className="logo">
                            <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        </div>
                        <p>
                            <small>
                                Fostering global connections, leveraging experts to empower learners through mentorship.
                            </small>
                        </p>
                    </div>

                    <hr />

                    <div className="fs-small">
                        <p className="fs-small">
                            <b> Contact Us</b> <br />
                            hello@owenahub.com
                        </p>

                        <p>
                            <b> Sign in </b> <br />
                            <Link to={"/auth/login"}>Learner</Link> | <Link to={"/auth/mentor/login"}>Mentor</Link> | <Link to={"/auth/admin/login"}>Admin</Link>
                        </p>

                        <p>
                            Owenahub, &copy; 2023 - All rights reserved <br />
                            <i>
                                version 1.0.1
                            </i>
                        </p>
                    </div>
                </div>
            </footer>

            {message &&
                (<div id="notification" className="animated2 sideBounce">
                    {message}
                </div>)
            }

            {modal &&
                <Backdrop>
                    <div className="header p-3">
                        <p className="text-center fw-3 text-white m-0">Subscribe to our Newsletter</p>
                    </div>
                    <div className="p-3">
                        <p className="text-secondary m-0">
                            <b>Get notified for:</b> <br />
                        </p>
                        <ul className="mt-1 text-secondary">
                            <li>Upcoming group sessions with mentors</li>
                            <li> Newly Published Articles</li>
                        </ul>

                        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input {...register("name", { required: true })}
                                    className={errors.name ? 'error form-control' : 'form-control'}
                                    type="text" placeholder="Scharzenneger Bjorn" />
                            </div>

                            <div className="form-control">
                                <input {...register("email", { required: true })}
                                    className={errors.name ? 'error form-control' : 'form-control'}
                                    type="email" placeholder="bjorn@xyz.com" />
                            </div>

                            <button id="submit" disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                                {isSubmitting ? (<span className='loader'></span>) : "subscribe"}
                            </button>
                        </form>
                    </div>
                </Backdrop>
            }
        </>
    )
}

export default GuestLayout