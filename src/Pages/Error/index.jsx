import {HelmetProvider} from "react-helmet-async"

const Error = () => {

    return (<div>

        <HelmetProvider>
            <title>Oups, il y a un problème!</title>
        </HelmetProvider>
    </div>)
}

export default Error;