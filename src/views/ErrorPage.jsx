import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page" style={style}>
            <h1>Oops</h1>
            <p>Sorry, an error occured.</p>
            <p className="text-secondary">
                <i>{error.statusText || error.message}</i>
            </p>
            <button className="btn btn-dark p-2"
                onClick={() => window.location.reload()}>
                reload
            </button>
        </div>
    )
}

const style = {
    textAlign: 'center',
}
