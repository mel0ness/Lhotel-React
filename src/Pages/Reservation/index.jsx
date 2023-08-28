import {HelmetProvider} from "react-helmet-async"
import InputChambre from "../../Components/InputChambre"
import "../../Style/Pages/Reservation/reservation.scss"
import {useState} from "react"

const Reservation = () => {

    const [checkedInput, ChangeCheckedInput] = useState("allClick1")
    const [checkedGender, updateCheckedGender] = useState("Male")
    const [checkedNimals, updateCheckedNimals] = useState("Non")

    const changementGender = (e) => {
        updateCheckedGender(e)
    }

    const changementNimals = (e) => {
        updateCheckedNimals(e)
    }

    return (<div>

        <HelmetProvider>
            <title>Réservation</title>
        </HelmetProvider>

<h1>Formulaire de reservation</h1>

<form action="https://www.lhotel-thouars.fr/test/reservation.php" method="post">
<fieldset>
            <legend>Informations personelles</legend>

            <ul className="NoneStyleList">
              <li>
                <label htmlFor="type1">Monsieur</label>
                <input type="radio" id="type1" name="genre" value="Monsieur" checked={checkedGender === "Male"} onChange={() => changementGender("Male")} required />
              </li>
              <li>
                <label htmlFor="type2">Madame</label>
                <input id="type2" type="radio" name="genre" value="Madame" checked={checkedGender === "Female"} onChange={() => changementGender("Female")} required />
              </li>
            </ul>

            <div className="dontlie">
              <label htmlFor="dontlie">En quelle année est né Magellan?<span className="required">*</span>
                :
              </label>
              <input type="number" id="dontlie" name="dontlie" />
            </div>

            <div>
              <label htmlFor="nom">Nom<span className="required">*</span> :
              </label>
              <input type="text" id="nom" name="name_user" required />
            </div>
            <div>
              <label htmlFor="prenom">Prénom<span className="required">*</span> :
              </label>
              <input type="text" id="prenom" name="name_user2" required />
            </div>
            <div>
              <label htmlFor="mail">Mail de contact :</label>
              <input type="email" id="mail" name="mail_user" />
            </div>
            <div>
              <label htmlFor="tel">Numéro de téléphone<span className="required">*</span>
                :
              </label>
              <input type="tel" id="tel" name="tel_user" required
                pattern="0[0-9][ -/]*[0-9]{2}[ -/]*[0-9]{2}[ -/]*[0-9]{2}[ -/]*[0-9]{2}" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Informations de réservation</legend>
    
    <InputChambre type={"type_1"} value={"Chambre Standard"} idprop={"allClick1"} check={checkedInput} funct={ChangeCheckedInput} />
    <InputChambre type={"type_2"} value={"Chambre Supérieure"} idprop={"allClick2"} check={checkedInput} funct={ChangeCheckedInput} />
    <InputChambre type={"type_3"} value={"Chambre Supérieure XL"} idprop={"allClick3"} check={checkedInput} funct={ChangeCheckedInput} />
    <InputChambre type={"type_4"} value={"Suite Familiale"}  idprop={"allClick4"} check={checkedInput} funct={ChangeCheckedInput}/>
            <div>
              <label htmlFor="nombreA"><span>Nombre d&apos;adultes<span className="required">*</span>
                  :
                </span></label>
              <input type="number" id="nombreA" name="reser_persa" min="1" max="5" value="1" required/>
            </div>
            <div>
              <label htmlFor="nombreE"><span>Nombre d&apos;enfants<span className="required">*</span>
                  :
                </span></label>
              <input type="number" id="nombreE" name="reser_perse" min="0" max="30" value="0" required />
            </div>

            <div>
              <label htmlFor="date"><span>Date d&apos;arrivée<span className="required">*</span>
                  :
                </span></label>
              <input type="date" id="date" name="reser_datee" required/>
            </div>
            <div>
              <label htmlFor="date2"><span>Date de départ<span className="required">*</span>
                  :
                </span></label>
              <input type="date" id="date2" name="reser_dates" required/>
            </div>
            <div className="Nights">
              Nombre de Nuits :
              <span id="numberNightsTotal" name="nights">0</span>
            </div>
            <div className="Nights">
              Prix de la réservation souhaitée (Hors petits-déjeuners) :
              <span id="price" name="price">0 €</span>
            </div>
        
            <div className="information">
              Le prix n&apos;inclus pas la taxe de séjour.
            </div>
            </fieldset>
            <fieldset>
            <legend>Présence d&apos;animaux?</legend>
            <div id="nimalsCadre">
              
              <ul className="NoneStyleList">
                <li>
                  <label htmlFor="type_11">Non</label>
                  <input type="radio" id="type_11" name="paws" value="non" checked={checkedNimals === "Non"} onChange={() => changementNimals("Non")} required />
                </li>
                <li>
                  <label htmlFor="type_22">Oui</label>
                  <input id="type_22" type="radio" name="paws" value="oui" checked={checkedNimals === "Oui"} onChange={() => changementNimals("Oui")} required />
                </li>
              </ul>
            </div>

            <div>Si oui, lesquels et combien?</div>
            <div>
              <label htmlFor="msgNimal" ></label>
              <textarea id="msgNimal" name="nimals" className="Animaux"></textarea>
            </div>
          </fieldset>
          <fieldset>
            <legend>Commentaires ou questions supplémentaires</legend>
            <div>
              <label htmlFor="msg"><span></span></label>
              <textarea id="msg" name="commentary" className="Animaux"></textarea>
            </div>
          </fieldset>
          <button type="submit" id="btn">
              Valider la réservation
            </button>
</form>

    </div>)
}

export default Reservation;