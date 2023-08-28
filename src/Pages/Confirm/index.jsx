import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../Style/Pages/Confirm/confirm.scss"

const Confirm = () => {
    return (
<div>
        <HelmetProvider>
<title>Confirmation de réservation</title>
        </HelmetProvider>

        <article>
            <div className="youpi">Merci de votre réservation, notre équipe vous la confirmera dans les plus brefs délais!
            </div>
            <div className="back"><Link to="/" title="retour accueil">Retour à l&apos;accueil</Link></div>



        </article>
        </div>
    )
}

export default Confirm;