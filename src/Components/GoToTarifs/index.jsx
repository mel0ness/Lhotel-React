import { Link } from "react-router-dom";
import "../../Style/Components/GoToTarifs/gototarifs.scss"

const GoToTarifs = () => {
    return (
        <div className="ToTarifs">Vous pouvez consulter les tarifs des chambres <Link className="LinkToTarifs" to="/Tarifs">sur cette page</Link>.</div>
    )
}

export default GoToTarifs;