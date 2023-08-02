import { useSelector } from "react-redux"

export async function loader() {
    return null
}

export default function Dashboard() {
    const { mentor, loading } = useSelector(state => state.authMentor);

    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Dashboard
            </h4>
            <p>
                Hello Mentor {" "}
                {loading ? (" . . . ") :
                    (<span className="animated fadeInDown2 fw-3">
                        {`${mentor.first_name} ${mentor.last_name}`}
                    </span>)
                }
            </p>
        </div>
    )
}
