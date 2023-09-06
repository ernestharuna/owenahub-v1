import { Link, useNavigation, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    const navigation = useNavigation();

    console.log(error);

    return (
        <div id="error-page" style={style} className={navigation.state === "loading" ? " loading" : ""}>
            <h1>Oops</h1>
            <p>Sorry, an error occured.</p>
            <p className="text-secondary">
                <i>{error.statusText || error.message}</i>
            </p>
            <button className="btn btn-dark p-2"
                onClick={() => window.location.reload()}>
                reload
            </button>

            &nbsp;

            <Link to={"/articles"}>
                <button className="btn p-2" disabled={navigation.state === "loading"}>
                    to articles
                </button>
            </Link>
        </div>
    )
}

const style = {
    textAlign: 'center',
}
