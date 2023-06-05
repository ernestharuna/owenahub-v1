import { Link } from "react-router-dom"

const PrimaryBtn = ({ text, link }) => {
    return (
        <Link to={link}>
            <button id="primary-btn">{text}<i class='bi bi-arrow-right-short fs-1'></i></button>
        </Link>
    )
}

export default PrimaryBtn