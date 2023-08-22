import { Link } from "react-router-dom";
import "../../Style/Components/Footer/footer.scss"

const Footer = () => {

    return (<div className="footer">
        <Link to="./Mentions">Mentions légales</Link>
    </div>)
}

export default Footer;