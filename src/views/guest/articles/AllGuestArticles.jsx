import { useLoaderData } from "react-router-dom";
import ArticleCard from '../../../components/ArticleCard';

export default function AllGuestArticles() {
    const articles = useLoaderData();

    return (
        <div>
            <section className='animated fadeInDown2'>
                <h3 className='fw-2 fs-2'>
                    Latest blog posts
                </h3>

                <div>
                    {
                        articles.length === 0 ? (<p>No articles . . . 🤔</p>) :
                            (articles.map((article) => (
                                <ArticleCard key={article.id} article={article} />))
                            )
                    }
                </div>
            </section>
        </div>
    )
}
