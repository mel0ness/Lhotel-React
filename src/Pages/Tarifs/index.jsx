import "../../Style/Pages/Tarifs/tarifs.scss"
// import warning from "../../assets/warning.svg";

const Tarifs = () => {

    return (
        <div>
            <table className="smartphone">
      <tr>
        <th scope="col" className="Titre">Type de chambre</th>
        <th scope="col" className="Titre">Période classique</th>
      </tr>
      <tr>
        <th scope="row">Chambre standard</th>
        <td>74€</td>
      </tr>
      <tr>
        <th scope="row">Chambre supérieure</th>
        <td>79€</td>
      </tr>
      <tr>
        <th scope="row">Chambre supérieure XL</th>
        <td>89€</td>
      </tr>
      <tr>
        <th scope="row">Suite familiale</th>
        <td>96€</td>
      </tr>
      <tr>
        <th scope="row">petits-déjeuners par personne</th>
        <td>8,50€</td>
      </tr>
      <tr>
        <th scope="row">Taxe de séjour par nuité par personne</th>
        <td>0,80€</td>
      </tr>
      {/* <tr>
        <th scope="row" rowSpan="1" className="flexRow"><img src={warning} alt="warning" className="warningtarifs" />Fermeture pour travaux</th>
        <td>Sera à nouveau ouvert à partir du lundi 5 Février 2024.</td>
      </tr> */}
    </table>

    <table className="tableNormal">
        <tbody>
      <tr>
        <th className="Titre" scope="col">Période / Service</th>
        <th className="Titre" scope="col">Chambre standard</th>
        <th className="Titre" scope="col">Chambre supérieure</th>
        <th className="Titre" scope="col">Chambre supérieure XL</th>
        <th className="Titre" scope="col">Suite familiale</th>
      </tr>
      <tr>
        <th scope="row">Période classique</th>
        <td>74€</td>
        <td>79€</td>
        <td>89€</td>
        <td>96€</td>
      </tr>
      <tr>
        <th scope="row">petits-déjeuners par personne</th>
        <td colSpan="4" className="boldy">8,50€</td>
      </tr>
      <tr>
        <th scope="row">Taxe de séjour par nuité par personne</th>
        <td colSpan="4" className="boldy">0,80€</td>
      </tr>
      {/* <tr>
        <th scope="row" className="flexRow"><img src={warning} alt="warning" className="warningtarifs" />Fermeture pour travaux</th>
        <td colSpan="4">Sera à nouveau ouvert à partir du lundi 5 Février 2024.</td>
      </tr> */}
      </tbody>
    </table>
        </div>
    )
}

export default Tarifs;