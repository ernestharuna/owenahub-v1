import { useState } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../../../axios-client";
import './adminAuthStyles.scss';


export default function AdminRegister() {
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        return;
        setError(null);
        try {
            const res = await axiosClient.post('/admin/register', data);
        } catch (err) {
            const res = err.response;
            if (res && err.status === 422) {
                setError(res.data.errors)
            }
        }
    }

    return (
        <div className="container mb-3">
            <div className="admin-form mt-2 fadeInDown animated">

                <h3 className="mx-2">Admin Registeration</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("first_name", { required: true })}
                        className={errors.first_name ? 'error form-control' : 'form-control'}
                        type="text" placeholder="First Name"
                    />

                    <input {...register("last_name", { required: true })}
                        className={errors.last_name ? 'error form-control' : 'form-control'}
                        type="text" placeholder="Last Name"
                    />

                    <input {...register("email", { required: true })}
                        className={errors.email ? 'error form-control' : 'form-control'}
                        type="text" placeholder="admin@owena.com"
                    />

                    <input {...register("password", { required: true })}
                        className={errors.password ? 'error form-control' : 'form-control'}
                        type="password" placeholder="Password"
                    />

                    <input {...register("password_confirmation", { required: true })}
                        className={errors.password_confirmation ? 'error form-control' : 'form-control'}
                        type="password" placeholder="Password"
                    />

                    <button type="submit" disabled={isSubmitting} className="submit-btn mt-1" id="">
                        {isSubmitting ? (<span className='loader'></span>) : "Register"}
                    </button>
                </form>
            </div>
        </div>
    )
}
