import {HelmetProvider} from "react-helmet-async"
import HotelPres from "../../Components/HotelPres";
import Cta from "../../Components/CTA";
import Services from "../../Components/Services";

const Home = () => {

    return (<div>

        <HelmetProvider>
            <title>Bienvenue à LHotel</title>
        </HelmetProvider>
        <HotelPres/>
        <Cta />
        <Services />
    </div>)
}

export default Home;