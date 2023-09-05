import { useLoaderData, useNavigate } from "react-router-dom";
import axiosClient from "../../../axios-client";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

dayjs.extend(relativeTime);

export async function loader({ params }) {
    try {
        const res = await axiosClient.get(`/articles/${params.articleId}`);
        const article = res.data;
        return article;
    } catch (err) {
        console.log(err);
        const article = []
        return article;
    }
}

export default function ShowArticle() {
    const { handleSubmit, formState: { isSubmitting } } = useForm();
    const article = useLoaderData();
    const navigate = useNavigate();

    const [update, setUpdate] = useState({
        title: article[0].title,
        description: article[0].description,
        category: article[0].category,
        published: article[0].published
    })
    const [content, setContent] = useState(article[0].content);

    const toolbarOptions = [
        [{ 'header': [3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'], // text formatting options
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ];

    const onSubmit = async () => {
        update.content = content;
        console.log(update);
        // return;
        await axiosClient.put(`/articles/${article[0].id}`, update)
            .then((data) => {
                console.log(data)
                navigate('/admin/articles');
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <section className="animated fadeInDown container-sm">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label htmlFor="category">Category</label>
                            <select id="category" className="form-control">
                                <option value="Web Development">Web Development</option>
                                <option value="UX Design">UX Design</option>
                                <option value="Career Advice">Career Advice</option>
                                <option value="Product Management">Product Management</option>
                                <option defaultValue={true} value={update.category}>{update.category}</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label htmlFor="description">Description</label><br />
                            <input value={update.description} onChange={e => setUpdate({ ...update, description: e.target.value })}
                                type="text" id="description" placeholder="Short snippet of article"
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="title">Title</label><br />
                            <input value={update.title} onChange={e => setUpdate({ ...update, title: e.target.value })}
                                type="text" id="title" placeholder="The Interesting benefits of . . ."
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="content">Content</label><br />
                            <ReactQuill theme="snow" value={content} onChange={setContent} modules={{ toolbar: toolbarOptions }}
                                style={{ width: "100%", background: "white", borderRadius: "0.5rem" }}
                            />
                        </div>

                        <div className="form-control mt-3">
                            <label htmlFor="publish" className="fw-3">Publish Article?</label>
                            <input type="checkbox" id="publish" checked={update.published}
                                onChange={e => setUpdate({ ...update, published: e.target.checked })}
                            />
                        </div>

                        <button className="btn mt-1" type="submit" disabled={isSubmitting} style={isSubmitting ? { cursor: 'wait' } : { cursor: 'pointer' }}>
                            {isSubmitting ? (<span className='loader'></span>) : "Update Post"}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
