import "../../Style/Components/Services/services.scss"
import Service1 from "../../assets/wifi.png"
import Service2 from "../../assets/tele.png"
import Service3 from "../../assets/paws.png"
import Service4 from "../../assets/bar.png"
import Service5 from "../../assets/canal.png"

const Services = () => {
    return(
        <div className="servicesBlock">
            <h1>Services Proposés par l&apos;Hôtel</h1>
            <div className="services">
            <div className="service"><img src={Service1} alt></img><span className="invisible">Service Wifi gratuit</span></div>
            <div className="service"><img src={Service2} alt></img><span className="invisible">Smart télévisions</span></div>
            <div className="service"><img src={Service3} alt></img><span className="invisible">Accueil possible d&apos;animaux</span></div>
            <div className="service"><img src={Service4} alt></img><span className="invisible">Service bar</span></div>
            <div className="service"><img src={Service5} alt></img><span className="invisible">Canal+ compris</span></div>
         </div></div>
    )
}

export default Services;