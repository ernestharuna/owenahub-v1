import { useForm } from "react-hook-form"
import axiosClient from "../../../axios-client";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../features/notification/notificationSlice";

export default function CreateGroupSession() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            await axiosClient.post('/group-sessions', data);
            dispatch(addMessage("Group Session Created"));
            setTimeout(() => dispatch(removeMessage()), 5000);
            navigate('/mentor/sessions');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="animated fadeInDown">
            <div className="container-sm">
                <h4>Create a group session</h4>

                <form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label htmlFor="topic">Topic</label>
                        <input {...register('topic', { required: true })}
                            type="text" id="topic" className={errors.topic ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control mt-2">
                        <label htmlFor="description">Description</label>
                        <textarea {...register("description", { required: true })}
                            placeholder="I need guidance to start a career in Mobile Application devleopement and . . ." id="description"
                            className={errors.description ? 'error form-control' : 'form-control'}
                        >
                        </textarea>
                    </div>

                    <div className="form-control mt-2">
                        <label htmlFor="meeting_link">Meeting Link</label>
                        <input {...register('meeting_link', { required: true })}
                            type="text" id="meeting_link" className={errors.meeting_link ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control mt-2">
                        <label htmlFor="max_attendants">Max Attendants</label>
                        <input {...register('max_attendants', { required: true })}
                            type="number" id="max_attendants" className={errors.max_attendants ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control mt-2">
                        <label htmlFor="date">Date</label>
                        <input {...register('date', { required: true })}
                            type="date" id="date" className={errors.date ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control mt-2">
                        <label htmlFor="start_time">Start Time</label>
                        <input {...register('start_time', { required: true })}
                            type="time" id="start_time" className={errors.start_time ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control mt-2">
                        <label htmlFor="end_time">End Time</label>
                        <input {...register('end_time', { required: true })}
                            type="time" id="end_time" className={errors.end_time ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <button className="btn mt-2" type="submit">
                        Create Session
                    </button>
                </form>
            </div>

        </div>
    )
}
