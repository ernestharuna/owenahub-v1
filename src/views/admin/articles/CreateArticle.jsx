import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";

export default function CreateArticle() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        return redirect(`/admin/dashboard`);
    }

    return (
        <div className="fadeInDown animated">
            <div style={style} className="container-sm">
                <h4>Create new post</h4>

                <form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <input {...register("title", { required: true })}
                            type="text" placeholder="Title"
                            className={errors.title ? 'error form-control' : 'form-control'}
                        />
                    </div>

                    <div className="form-control">
                        <textarea {...register("content", { required: true })}
                            placeholder="Article content..."
                            className={errors.content ? 'error form-control' : 'form-control'}
                        ></textarea>
                    </div>

                    <button className="btn" type="submit" disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                        {isSubmitting ? (<span className='loader'></span>) : "Create Post"}
                    </button>
                </form>
            </div>
        </div>
    )
}

const style = {
    background: "#F7FAFC",
    borderRadius: "5px",
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae vitae doloremque rerum impedit fuga! Perferendis voluptatum culpa, aliquid facere error cupiditate labore rerum vitae molestias consequuntur natus, velit est eaque explicabo iure, iste dignissimos porro unde exercitationem et. Non ab voluptatibus qui voluptas sunt rem deserunt, nostrum fuga sequi quod ducimus officia odio iste tenetur ipsam eos doloribus in dolorum soluta incidunt, rerum quos? Velit, eius ab consequatur delectus, quasi maiores cumque et, commodi officiis quas necessitatibus eveniet modi sapiente! Voluptatum alias omnis perferendis sapiente maiores enim, itaque dolorem vitae distinctio accusamus. Error odit quaerat assumenda quia architecto! Laboriosam ad repellat voluptatem. Quas ratione maxime quasi porro ipsa consequuntur distinctio consequatur non repudiandae fugit nulla harum veritatis, sed nostrum excepturi culpa odio est ullam. Ipsum blanditiis possimus unde quia numquam omnis id, perspiciatis porro quibusdam? Quam unde pariatur, ut, reiciendis consequatur deserunt repellendus in omnis rerum modi commodi! Totam quo modi obcaecati temporibus, perferendis quas cumque inventore sit error doloremque ut ab nisi ipsa repellendus, enim in similique aspernatur quisquam delectus dignissimos repudiandae. Officia earum vitae accusamus voluptatibus necessitatibus et velit optio quidem ipsa, iure temporibus placeat, quaerat ut, laudantium error sunt at facilis modi rem blanditiis illo. Culpa.