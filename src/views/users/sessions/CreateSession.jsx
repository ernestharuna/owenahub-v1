import { useForm } from "react-hook-form";

export default function CreateSession() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

    return (
        <div className="animated fadeInDown">
            <hr />
            <p>
                OwenaHub works with professionals that have a wealth of experience and are enthusiastic to meet with you.
            </p>
            <h5>
                Available mentors
            </h5>

            <div className="user-sessions-box mt-2">
                <form className="mt-1" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="interest">Interest</label>
                        <select id="interest" className="form-control" {...register("interest", { required: true })}>
                            <option defaultValue={true} value="Career Advice">Career Advice</option>
                            <option value="Web Development">Web Development</option>
                            <option value="UX Design">UX Design</option>
                            <option value="Product Management">Product Management</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label htmlFor="description">Description</label><br />
                        <input {...register("description", { required: true })}
                            type="text" id="description" placeholder="Short snippet of article"
                            className={errors.title ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="title">Title</label><br />
                        <input {...register("title", { required: true })}
                            type="text" id="title" placeholder="The Interesting benefits of . . ."
                            className={errors.title ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="content">Content</label><br />
                        <textarea {...register("content", { required: true })}
                            placeholder="The most interesting fact about this is . . . " id="content"
                            className={errors.content ? 'error form-control' : 'form-control'}
                        >
                        </textarea>
                    </div>

                    <button className="btn mt-1" type="submit" disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                        {isSubmitting ? (<span className='loader'></span>) : (<span className="fs-1">Create Session</span>)}
                    </button>
                </form>
            </div>
        </div>
    )
}
