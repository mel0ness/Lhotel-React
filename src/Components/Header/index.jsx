import LogoMobile from "../../assets/logoUpdated.png"
import LogoDesktop from "../../assets/logo.png"
import { Link, useLocation } from "react-router-dom";
import "../../Style/Components/Header/header.scss"

const Header = () => {

const path = useLocation().pathname;

    return (
        <div className="header">
            <Link to="/">
<img src={LogoMobile} alt="Logo de LHotel" className="logoMobile" />
<img src={LogoDesktop} alt="Logo de LHotel" className="logoDesktop" />
</Link>
<nav>
{path === "/Chambres" ? <Link to="./Chambres" className="linkedPage">Chambres</Link> : <Link to="./Chambres" className="link">Chambres</Link>}    

<div className="separator"></div>
{path === "/Reservation" ? <Link to="./Reservation" className="linkedPage">Réservation</Link> : <Link to="./Reservation" className="link">Réservation</Link>}    

</nav>
        </div>
    )
}

export default Header;