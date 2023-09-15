import "../../Style/Pages/Tarifs/tarifs.scss"

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
      <tr>
        <th scope="row">LHotel est fermé les dates suivantes :</th>
        <td>Les soirs du 30 Septembre et du premier Octobre</td>
      </tr>
      <tr>
        <th scope="row">LHotel est fermé les dates suivantes :</th>
        <td colSpan='4'>Du 29 Octobre au 6 Novembre (inclus)</td>
      </tr>
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
      <tr>
        <th scope="row">LHotel est fermé les dates suivantes :</th>
        <td colSpan='4'>Les soirs du 30 Septembre et du premier Octobre</td>
      </tr>
      <tr>
        <th scope="row">LHotel est fermé les dates suivantes :</th>
        <td colSpan='4'>Du 29 Octobre au 6 Novembre (inclus)</td>
      </tr>
      </tbody>
    </table>
        </div>
    )
}

export default Tarifs;