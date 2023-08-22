import {HelmetProvider} from "react-helmet-async"

const Home = () => {

    return (<div>

        <HelmetProvider>
            <title>Bienvenue à LHotel</title>
        </HelmetProvider>
    </div>)
}

export default Home;