import { Outlet, useLoaderData } from 'react-router-dom';
import './guestArticles.scss';
import axiosClient from '../../../axios-client';
import MentorsCard from '../../../components/MentorsCard';

export async function loader() {
    const [res1, res2] = await Promise.all([
        axiosClient.get('/guest/articles'),
        axiosClient.get('/guest/mentors'),
    ]);

    return {
        articles: res1.data.data,
        mentors: res2.data.data,
    }

}

export default function GuestArticles() {
    const { mentors } = useLoaderData();

    return (
        <div className='guest-articles'>
            <section className='animated fadeInDown px-1 flex-items mt-1'>
                <div>
                    <h3 className='fw-3 fs-2 ml-1'>
                        Blog
                    </h3>
                </div>

                <div>
                    <button className="btn btn-dark p-2">
                        Submit Article <i className="bi bi-cursor"></i>
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

                <aside className='animated fadeInDown2'>
                    <h3 className="fw-2 fs-2">
                        Owena Resources
                    </h3>
                    <p>Software Engineering</p>
                    <p>Data science</p>
                    <p>Accounting</p>
                    <p>Career Advice</p>

                    <hr />

                    <h3 className="fw-2 fs-2">
                        Top Writers
                    </h3>

                    <div>
                        {mentors.length === 0 ?
                            (<p>There are no mentors available at the moment</p>) :
                            (mentors.map((mentor) =>
                                (<MentorsCard key={mentor.id} mentor={mentor} />)
                            ))
                        }
                    </div>
                </aside>
            </div>
        </div>
    )
}
