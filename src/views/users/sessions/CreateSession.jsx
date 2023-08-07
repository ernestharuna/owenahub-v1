import { useForm } from "react-hook-form";
import axiosClient from "../../../axios-client";

export default function CreateSession() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        data.mentor_id = 1;
        try {
            const res = await axiosClient.post('sessions', data);
            console.log(res.data, "Succes");
        } catch (err) {
            console.log(err, "error");
        }
    }

    return (
        <div className="animated fadeInDown">
            <p>
                OwenaHub works with professionals that have a wealth of experience and are enthusiastic to meet with you.
            </p>

            <div className="user-sessions-box mt-2">
                <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label htmlFor="title">
                            Title {" "}
                            <span className="time">(Add a unique title that inspires you)</span>
                        </label><br />
                        <input {...register("title", { required: true })}
                            type="text" id="title" placeholder="Session with . . . mentor"
                            className={errors.title ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control mt-2">
                        <label htmlFor="description">Goals {" "}
                            <span className="time">(explain what you most need mentorship on)</span>
                        </label><br />
                        <textarea {...register("description", { required: true })}
                            placeholder="I need guidance to start a career in Mobile Application devleopement and . . ." id="description"
                            className={errors.description ? 'error form-control' : 'form-control'}
                        >
                        </textarea>
                    </div>

                    <button className="btn mt-1" type="submit" disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                        {isSubmitting ? (<span className='loader'></span>) : (<span className="fs-1">Create Session</span>)}
                    </button>
                </form>
            </div >
        </div >
    )
}
