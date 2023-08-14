export default function ShareContent() {
    return (
        <div className="share-icons">
            <p className="fw-2">
                Share with your network
            </p>

            <div className="p-1" style={whatsapp}>
                <i className="bi bi-whatsapp"></i>
            </div>

            <div className="p-1" style={linkedin}>
                <i className="bi bi-linkedin"></i>
            </div>

            <div className="p-1" style={fb}>
                <i className="bi bi-facebook"></i>
            </div>
        </div>
    )
}

const whatsapp = {
    background: "#25D366"
}

const linkedin = {
    background: "#0077B5",
}

const fb = {
    background: "#1877F2"
}