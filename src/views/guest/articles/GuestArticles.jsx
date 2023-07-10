import { Outlet } from 'react-router-dom';
import './guestArticles.scss';
import axiosClient from '../../../axios-client';

export async function loader() {
    const res = await axiosClient.get('guest/articles');
    const articles = res.data.data;
    return articles;
}

export default function GuestArticles() {
    return (
        <div className='guest-articles'>
            <section className='animated fadeInDown px-2 flex-items mt-1'>
                <div>
                    <h3 className='fw-2 fs-2'>
                        Blog
                    </h3>
                </div>

                <div>
                    <button className="btn-dark p-2">
                        Submit Article
                    </button>
                </div>
            </section>

            <div className="px-2">
                <hr />
            </div>

            <div className='outlet-box mt-1 container-md'>
                <div className="outlet">
                    <Outlet />
                </div>

                <aside>
                    <h3 className="fw-2 fs-2">
                        Owena Resources
                    </h3>
                    <p> Software Engineering</p>
                    <p>Data science</p>
                    <p>Accounting</p>
                    <p>Career Advice</p>

                    <hr />

                    <h3 className="fw-2 fs-2">
                        Top Writers
                    </h3>

                </aside>
            </div>
        </div>
    )
}
