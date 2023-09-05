import "../../Style/Components/CTA/cta.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import scrollTop from "../../Features/scrollTop"

const Cta = () => {

const [animation, setAnimation] = useState(false);    
const navigate = useNavigate();

const redirect = () => {
setAnimation(true)

setTimeout(() => {
    scrollTop();
    navigate("./Reservation")
}

,500)
}

    return (
        <div className="CTA">
{animation? <div className="directCTA" ><span className="loading"></span></div> : <div className="directCTA" onClick={() => redirect()}>Réserver une chambre dès maintenant</div> }            

<div className="indirectCTA"> Pour des demandes spéciales ou un contact direct n&apos;hésitez pas à utiliser nos coordonnées : 
<a href="tel:0586830050">05.86.83.00.50</a>
<a href="mailto:lhotel.thouars@gmail.com">lhotel.thouars@gmail.com</a>
</div>



        </div>
    )
}

export default Cta;