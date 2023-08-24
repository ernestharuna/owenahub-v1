import { useForm } from "react-hook-form";
import axiosClient from "../../../axios-client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// React-Quill imports
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export default function CreateArticle() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    const onSubmit = async (data) => {
        data.content = content;
        console.log(data);
        try {
            await axiosClient.post('/articles', data);
            navigate('/admin/articles');
        } catch (err) {
            console.log(err);
        }
    }

    const toolbarOptions = [
        [{ 'header': [3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'], // text formatting options
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ];

    return (
        <div className="fadeInDown animated">
            <div style={style} className="container-sm">
                <h4>Create new post</h4>

                <form className="mt-1" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label htmlFor="category">Category</label>
                        <select id="category" className="form-control" {...register("category", { required: true })}>
                            <option value="Web Development">Web Development</option>
                            <option value="UX Design">UX Design</option>
                            <option defaultValue={true} value="Career Advice">Career Advice</option>
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
                        <ReactQuill theme="snow" value={content} onChange={setContent} modules={{ toolbar: toolbarOptions }}
                            style={{ width: "97%", background: "white", borderRadius: "0.5rem" }}
                        />
                    </div>

                    <div className="form-control mt-3">
                        <label htmlFor="publish" className="fw-3">Publish Article?</label>
                        <input type="checkbox" name="" id="publish"
                            {...register("published")}
                        />
                    </div>

                    <button className="btn mt-1" type="submit" disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                        {isSubmitting ? (<span className='loader'></span>) : "Create Post"}
                    </button>
                </form>
            </div>
        </div>
    )
}

const style = {
    background: "#DEEAF2",
    borderRadius: "5px",
    paddingTop: "1rem",
    paddingBottom: "1rem"
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae vitae doloremque rerum impedit fuga! Perferendis voluptatum culpa, aliquid facere error cupiditate labore rerum vitae molestias consequuntur natus, velit est eaque explicabo iure, iste dignissimos porro unde exercitationem et. Non ab voluptatibus qui voluptas sunt rem deserunt, nostrum fuga sequi quod ducimus officia odio iste tenetur ipsam eos doloribus in dolorum soluta incidunt, rerum quos? Velit, eius ab consequatur delectus, quasi maiores cumque et, commodi officiis quas necessitatibus eveniet modi sapiente! Voluptatum alias omnis perferendis sapiente maiores enim, itaque dolorem vitae distinctio accusamus. Error odit quaerat assumenda quia architecto! Laboriosam ad repellat voluptatem. Quas ratione maxime quasi porro ipsa consequuntur distinctio consequatur non repudiandae fugit nulla harum veritatis, sed nostrum excepturi culpa odio est ullam. Ipsum blanditiis possimus unde quia numquam omnis id, perspiciatis porro quibusdam? Quam unde pariatur, ut, reiciendis consequatur deserunt repellendus in omnis rerum modi commodi! Totam quo modi obcaecati temporibus, perferendis quas cumque inventore sit error doloremque ut ab nisi ipsa repellendus, enim in similique aspernatur quisquam delectus dignissimos repudiandae. Officia earum vitae accusamus voluptatibus necessitatibus et velit optio quidem ipsa, iure temporibus placeat, quaerat ut, laudantium error sunt at facilis modi rem blanditiis illo. Culpa.