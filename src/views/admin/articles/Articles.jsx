import { Form, Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import axiosClient from "../../../axios-client";

export async function loader() {
    const res = await axiosClient.get('/articles');
    const articles = res.data.data;
    return articles;
}

export default function Articles() {
    const location = useLocation();
    const navigation = useNavigation();

    return (
        <div className="container-md animated fadeInDown">
            <div className="flex-items mb-1">
                <div>
                    <h4 className="fw-3 fs-2">
                        Manage Articles
                    </h4>
                </div>

                <div>
                    {/* To change navigation button content */}
                    {
                        location.pathname === "/admin/articles/create" ?
                            (<Link to={"/admin/articles"}>
                                <button className="btn" type="submit"><i className="bi bi-chevron-double-left"></i> Back</button>
                            </Link>) :
                            (<Form action="create">
                                <button className="btn" type="submit"><i className="bi bi-plus-circle"></i> New Post</button>
                            </Form>)
                    }
                </div>
            </div>
            <div className={navigation.state === "loading" ? "loading" : ""} >
                <Outlet />
            </div>
        </div>
    )
}