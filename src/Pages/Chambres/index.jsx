import {HelmetProvider} from "react-helmet-async"
import Galerie from "../../Components/Galerie";
import Chambre1 from "../../assets/chambre1.jpg";
import Chambre2 from "../../assets/chambre2.jpg"
import Chambre3 from "../../assets/chambre3.jpg"
import Chambre4 from "../../assets/chambre4.jpg"
import Chambre5 from "../../assets/chambre5.jpg"
import Chambre6 from "../../assets/chambre6.jpg"
import Grid1 from "../../assets/buff2.jpg"
import Grid2 from "../../assets/buff1.jpg"
import Grid3 from "../../assets/buff3.jpg"
import "../../Style/Pages/Chambres/chambres.scss"

const Chambres = () => {


const alt1 = "Chambre standard"
const alt2 = "Chambre supérieure"
const alt3 = "Suite familiale"

const alt4 = "SdB"
const alt5 = "Salle de petit déjeuner"
const alt6 = "Accueil"

    return (<div>

        <HelmetProvider>
            <title>Chambres et services de LHotel</title>
        </HelmetProvider>
<Galerie src1={Chambre1} alt1={alt1} src2={Chambre2} alt2={alt2} src3={Chambre3} alt3={alt3} size="250px166px"/>

<div className="paraphChambres">Toutes nos chambres possèdent des WC ainsi qu&apos;une salle de bain individuelle
                (sèche-cheveux compris). Chacun pourra également y retrouver un écran de smart-télévision de 80cm
                (Dispose des applications VOD et de la capacité de tout le monde de s&apos;y connecter pour profiter d&apos;un
                divertissement en continu). Si cela ne vous suffit pas, notre connexion wifi gratuite vous permettra de
                compléter votre soirée.</div>

<Galerie src1={Chambre4} alt1={alt4} src2={Chambre5} alt2={alt5} src3={Chambre6} alt3={alt6} size="190px285px"/>

<div className="paraphChambres center">Les différences dans nos chambres se font de l&apos;espace qu&apos;elles apportent et le confort
                des dimensions du lit!
             
                    <div className="listeChambres"><div className="nomChambre">Chambre standard :</div> 1 lit 140x190cm</div>
                    <div className="listeChambres"><div className="nomChambre">Chambre supérieure :</div> 1 lit 160x200cm</div>
                    <div className="listeChambres"><div className="nomChambre">Chambre supérieure XL :</div> 1 lit 160x200cm et un canapé lit supplémentaire</div>
                    <div className="listeChambres"><div className="nomChambre">Suite familiale :</div> 1 lit 140x190cm et 2 lits 90x190cm</div>
                </div>
<div className="separatorServices"></div>
                <div className="grid">
<img src={Grid1} alt="café" className="grid1"></img>
<div className="paraphChambre grid2">Pour 8,50€ vous pourrez profiter d&apos;un excellent petit déjeuner à notre buffet. Du
                        café d&apos;excellence avec le Gran Espresso de Lavazza et des viennoiseries (Mais aussi d&apos;autres
                        propositions).</div>
                        <img src={Grid2} alt="Viennoiseries" className="grid3"></img>
                        <img src={Grid3} alt="Machine à café" className="grid4"></img>
                </div>

    </div>)
}

export default Chambres;