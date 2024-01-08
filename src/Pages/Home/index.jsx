import {HelmetProvider} from "react-helmet-async"
import HotelPres from "../../Components/HotelPres";
import Cta from "../../Components/CTA";
import Services from "../../Components/Services";
import Warning from "../../Components/warning";

const Home = () => {

    return (<div>

        <HelmetProvider>
            <title>Bienvenue à LHotel</title>   
        </HelmetProvider>
        <Warning style={"home"}/>
        <HotelPres/>
        <Cta />
        <Services />
    </div>)
}

export default Home;