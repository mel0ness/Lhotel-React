import {HelmetProvider} from "react-helmet-async"
import InputChambre from "../../Components/InputChambre"
import "../../Style/Pages/Reservation/reservation.scss"
import {useEffect, useState} from "react"
import { Price } from "../../Features/Price/price"
import { Nights } from "../../Features/Nights/nights"
import { Validation } from "../../Features/Validation/validation"
import GoToTarifs from "../../Components/GoToTarifs"

const Reservation = () => {

    const [checkedInput, ChangeCheckedInput] = useState("allClick1")
    const [checkedGender, updateCheckedGender] = useState("Male")
    const [checkedNimals, updateCheckedNimals] = useState("Non")
    const [price, updatePrice] = useState(74)
    const [dateArrival, updateDateArrival] = useState()
    const [dateDeparture, updateDateDeparture] = useState()
    const [numberNights, updateNumbreNights] = useState()
    const [errorDates, updateErrorDates] = useState(true)
    const [Modale, updateModale] = useState(false)

    const changementGender = (e) => {
        updateCheckedGender(e)
    }

    const changementNimals = (e) => {
        updateCheckedNimals(e)
    }

    const modale =(e) => {
      e.preventDefault()
      updateModale(true)
    }

    const fermetureModale =() => {
      updateModale(false)
    }


    useEffect(() => {
      Price(checkedInput, updatePrice, numberNights)
Validation(dateArrival, dateDeparture, updateErrorDates)
Nights(dateArrival, dateDeparture, updateNumbreNights)      
    }, [checkedInput, dateArrival, dateDeparture, numberNights] )

    

    return (<div>

        <HelmetProvider>
            <title>Réservation</title>
        </HelmetProvider>

        {Modale? <div className="modaleOpened"> 
          <div className="modale">Attention les dates renseignées ne correspondent pas (Vérifier les dates de départ et d&apos;arrivée)<div className="buttonType" onClick={() => fermetureModale()}>C&apos;est compris</div></div>
          </div> : <div className="modaleClosed"></div>}

<h1>Formulaire de reservation</h1>

<form action="https://www.lhotel-thouars.fr/test/reservation.php" method="post">
<fieldset>
            <legend>Informations personelles</legend>

            <ul className="NoneStyleList">
              <li className="flexInput">
                <label htmlFor="type1">Monsieur</label>
                <input type="radio" id="type1" name="genre" value="Monsieur" checked={checkedGender === "Male"} onChange={() => changementGender("Male")} required />
              </li>
              <li className="flexInput">
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

            <div className="flexInput">
              <label htmlFor="nom">Nom<span className="required">*</span> :
              </label>
              <input type="text" id="nom" name="name_user" required />
            </div>
            <div className="flexInput">
              <label htmlFor="prenom">Prénom<span className="required">*</span> :
              </label>
              <input type="text" id="prenom" name="name_user2" required />
            </div>
            <div className="flexInput">
              <label htmlFor="mail">Mail de contact :</label>
              <input type="email" id="mail" name="mail_user" />
            </div>
            <div className="flexInput">
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
            <div className="flexInput">
              <label htmlFor="nombreA"><span>Nombre d&apos;adultes<span className="required">*</span>
                  :
                </span></label>
              <input type="number" id="nombreA" name="reser_persa" min="1" max="8" required/>
            </div>
            <div className="flexInput">
              <label htmlFor="nombreE"><span>Nombre d&apos;enfants<span className="required">*</span>
                  :
                </span></label>
              <input type="number" id="nombreE" name="reser_perse" min="0" max="8" required />
            </div>

            <div className="flexInput">
              <label htmlFor="date"><span>Date d&apos;arrivée<span className="required">*</span>
                  :
                </span></label>
              <input type="date" id="date" name="reser_datee" onChange={(e) => updateDateArrival(e.target.value) } required/>
            </div>
            <div className="flexInput">
              <label htmlFor="date2"><span>Date de départ<span className="required">*</span>
                  :
                </span></label>
              <input type="date" id="date2" name="reser_dates" onChange={(e) => updateDateDeparture(e.target.value) } required/>
            </div>
            <div className="Nights">
              Nombre de Nuits :
              <input type="text" id="numberNightsTotal" value={numberNights} name="nights" className="inputInvisible"></input>
            </div>
            <div className="Nights">
              Prix de la réservation souhaitée (Hors petits-déjeuners) :
              <div><input className="inputInvisible inline" type="text" id="price" name="price" value={price + "€"}></input></div>
            </div>
        <GoToTarifs />
            <div className="information">
              Le prix n&apos;inclus pas la taxe de séjour.
            </div>
            </fieldset>
            <fieldset>
            <legend>Présence d&apos;animaux?</legend>
            <div id="nimalsCadre">
              
              <ul className="NoneStyleList">
                <li className="flexInput">
                  <label htmlFor="type_11">Non</label>
                  <input type="radio" id="type_11" name="paws" value="non" checked={checkedNimals === "Non"} onChange={() => changementNimals("Non")} required />
                </li>
                <li className="flexInput">
                  <label htmlFor="type_22">Oui</label>
                  <input id="type_22" type="radio" name="paws" value="oui" checked={checkedNimals === "Oui"} onChange={() => changementNimals("Oui")} required />
                </li>
              </ul>
            </div>

            <div className="NimalsWhich">Si oui, lesquels et combien?</div>
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
          {errorDates?  <button type="submit" id="btn" onClick={(e) => modale(e)}>
              Valider la réservation
            </button> :  <button type="submit" id="btn">
              Valider la réservation
            </button>}

            <div className="oblige"><span className="required">*</span> : Champs obligatoires</div>
         
</form>

    </div>)
}

export default Reservation;