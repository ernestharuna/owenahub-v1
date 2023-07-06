import { Form, Link, Outlet, useLocation } from "react-router-dom";

export default function Articles() {
    const location = useLocation();

    return (
        <div className="container-md animated fadeInDown">
            <div className="flex-items mb-1">
                <div>
                    <h3>
                        Articles
                    </h3>
                    <small>
                        This page contains blog posts visible to guests on the home page.
                    </small>
                </div>

                <div>
                    {
                        location.pathname === "/admin/articles/create" ?
                            (<Link to={"/admin/articles"}>
                                <button className="btn mt-1" type="submit"><i className="bi bi-chevron-double-left"></i> Back</button>
                            </Link>) :
                            (<Form action="create">
                                <button className="btn mt-1" type="submit"><i className="bi bi-plus-circle"></i> New Post</button>
                            </Form>)
                    }
                </div>
            </div>
            <Outlet />
        </div>
    )
}