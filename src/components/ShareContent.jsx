export default function ShareContent() {
    return (
        <div className="share-icons">
            <p className="fw-2">
                Share with your network
            </p>

            <div style={whatsapp} onClick={() => {
                window.open(whatsappLink + encodeURIComponent(invite))
            }}>
                <i className="bi bi-whatsapp"></i>
            </div>

            <div style={linkedin} onClick={() => {
                window.open(linkedIn + encodeURIComponent("https://www.owenahub.com/articles"))
            }}>
                <i className="bi bi-linkedin"></i>
            </div>

            <div style={fb} onClick={() => {
                window.open(fbLink + encodeURIComponent("www.owenahub.com/articles"))
            }}>
                <i className="bi bi-facebook"></i>
            </div>
        </div>
    )
}

const whatsapp = { background: "#25D366" };
const linkedin = { background: "#0077B5" };
const fb = { background: "#1877F2" };

const invite = "Check out OwenaHub's tech articles: https://www.owenahub.com/articles";

const fbLink = "https://www.facebook.com/sharer/sharer.php?u=";
const whatsappLink = "https://api.whatsapp.com/send?text=";
const linkedIn = "https://www.linkedin.com/sharing/share-offsite/?url=";