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
        </div>
    )
}

const style = {
    textAlign: 'center',
}
