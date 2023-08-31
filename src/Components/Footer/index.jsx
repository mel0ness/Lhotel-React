import { Link } from "react-router-dom";
import "../../Style/Components/Footer/footer.scss"
import Copy from "../../assets/copyright.svg"

const Footer = () => {

    return (<div className="footer">
        <div className="copyrights"><img src={Copy} alt="Copyrights" />2023 LHotel, tous droits réservés.</div>
        <Link to="./Mentions">Mentions légales</Link>
    </div>)
}

export default Footer;