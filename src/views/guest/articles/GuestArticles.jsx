import { Link, Outlet, useLoaderData } from 'react-router-dom';
import './guestArticles.scss';
import axiosClient from '../../../axios-client';
import MentorsCard from '../../../components/MentorsCard';
import SIdeArticle from '../../../components/SIdeArticle';

export async function loader() {
    try {
        const [articlesResponse, mentorsResponse] = await Promise.all([
            axiosClient.get('/guest/articles'),
            axiosClient.get('/guest/mentors'),
        ]);

        const articlesData = articlesResponse.data.data;
        const mentorsData = mentorsResponse.data.data;

        return {
            articles: articlesData,
            mentors: mentorsData,
        };
    } catch (error) {
        console.error("Error loading data:", error);
        return {
            articles: [],
            mentors: [],
        };
    }
}

export default function GuestArticles() {
    const { mentors, articles } = useLoaderData();

    return (
        <div className='guest-articles'>
            <section className='animated fadeInDown px-1 flex-items mt-1'>
                <div>
                    <h3 className='fw-3 fs-2 ml-1'>
                        <Link to={"/articles"}>Blog</Link>
                    </h3>
                </div>

                <div>
                    <Link to={"/waitlist"}>
                        <button className="btn btn-dark p-2">
                            Submit Article <i className="bi bi-cursor"></i>
                        </button>
                    </Link>
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
                    <div>
                        <h3 className="fw-2 fs-2">
                            Owena Resources
                        </h3>
                        <div className="resource-types">
                            <p>
                                Web Development
                                <i className="bi bi-link-45deg"></i>
                            </p>
                            <p>
                                UX Design
                                <i className="bi bi-link-45deg"></i>
                            </p>
                            <p>
                                Career Advice
                                <i className="bi bi-link-45deg"></i>
                            </p>
                            <p>
                                Product Management
                                <i className="bi bi-link-45deg"></i>
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h3 className="fw-2 fs-2">
                            Top Writers
                        </h3>
                        <div>
                            {mentors.length === 0 ?
                                (<p className='text-secondary'>There are no mentors available at the moment</p>) :
                                (mentors.slice(0, 5).map((mentor) => (
                                    <MentorsCard key={mentor.id} mentor={mentor} />))
                                )
                            }
                        </div>
                    </div>

                    <br />
                    <br />

                    <div>
                        <h3 className='fw-2 fs-2 mb-1'>Editor's Choice</h3>
                        <div>
                            {articles.length === 0 ?
                                (<p className='text-secondary'>No posts to show</p>) :
                                (articles.slice(0, 5).map(article => (
                                    <SIdeArticle key={article.id} article={article} />
                                )))
                            }
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}