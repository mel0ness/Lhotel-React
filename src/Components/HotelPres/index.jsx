import Terasse from "../../assets/terr.jpg"
import "../../Style/Components/HotelPres/hotelpres.scss"

const HotelPres = () => {
    return (<div className="flexyBecome">
<div className="calque"><img src={Terasse} alt="Devanture de l'hotel" className="devanture" /><div className="imageText">Bienvenue à Thouars</div></div>
<div  className="description"><div className="parag"><span className="marque">L&apos;Hotel</span> vous accueille au cœur de la ville de
                    Thouars, classée « Art et histoire ». Situé à proximité du centre ville, de la station « T » et de
                    l’ensemble des services et loisirs culturels Thouarsais, l’ensemble de vos déplacements peuvent se
                    faire aisément à pied ou à velo, vous permettant ainsi de mieux découvrir le patrimoine.</div>
                <div  className="parag">Thouars se situe 2h30 de Paris par le train, à la croisée du marais
                    Poitevin, du Puy du Fou et du Futuroscope, et à 30 minutes de Saumur et des bords de Loire . Pour
                    une halte ou un séjour, vous serez accueillis dans une ambiance chaleureuse et conviviale. Les
                    chambres sont confortables, personnalisées et calmes. Situé sur la route de St jacques de
                    Compostelle, et sur l’itinéraire du Thouet à Vélo, L’HOTEL est particulièrement adapté aux
                    cyclotouristes et randonneurs.</div></div>
    </div>)
}

export default HotelPres;