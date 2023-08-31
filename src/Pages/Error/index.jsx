import {HelmetProvider} from "react-helmet-async"
import error from "../../assets/error.svg"
import "../../Style/Pages/Error/error.scss"

const Error = () => {

    return (<div>

        <HelmetProvider>
            <title>Oups, il y a un problème!</title>
        </HelmetProvider>
        <div><img src={error} alt="Erreur" className="errorImg" /><div className="errorMsg">Cette page n&apos;existe pas sur notre site.</div></div>
    </div>)
}

export default Error;