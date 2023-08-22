import {HelmetProvider} from "react-helmet-async"
import "../../Style/Pages/Mentions/mentions.scss"

const Mentions = () => {

    return (<div>

        <HelmetProvider>
            <title>Mentions légales</title>
        </HelmetProvider>

        <h1>Mentions légales</h1>
        <div className="article">
            <h2>1 - Édition du site</h2>

            <div className="section">En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
                numérique, il est précisé aux utilisateurs du site internet https://www.lhotel-thouars.fr l&apos;identité des
                différents intervenants dans le cadre de sa réalisation et de son suivi: <br />
                <span className="bold">Propriétaire du site :</span> SAS Katimini - Contact : lhotel.thouars@gmail.com
                0586830050 - Adresse : 1 place de la gare 79100 Thouars.<br />
                <span className="bold">Identification de l&apos;entreprise :</span> SAS SAS Katimini au capital social de 1000€ -
                SIREN : 892275256 - RCS ou RM : RCS Niort B 892 275 256 - Adresse postale : 1 place de la gare 79100
                Thouars<br />
                <span className="bold">Hébergeur :</span> OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1 -
                Téléphone : 1007<br />
                <span className="bold">Autres contributeurs :</span> Représentant légal : Sylvain BARYLA
            </div>

            <h2>2 - Propriété intellectuelle et contrefaçons</h2>

            <div className="section">SAS Katimini est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur
                tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos,
                vidéos, architecture, icônes et sons.<br />
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable
                de SAS Katimini.<br />
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu’il contient sera
                considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles
                L.335-2 et suivants du Code de Propriété Intellectuelle.</div>

            <h2>3 - Limitations de responsabilité</h2>

            <div className="section">SAS Katimini ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel
                de l’utilisateur, lors de l’accès au site https://www.lhotel-thouars.fr.<br />
                SAS Katimini décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations
                et contenus présents sur https://www.lhotel-thouars.fr.<br />
                SAS Katimini s&apos;engage à sécuriser au mieux le site https://www.lhotel-thouars.fr, cependant sa
                responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur
                son site à son insu.<br />
                Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. SAS
                Katimini se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet
                espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions
                relatives à la protection des données.<br />
                Le cas échéant, SAS Katimini se réserve également la possibilité de mettre en cause la responsabilité
                civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux,
                diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</div>

            <h2>4 - Liens hypertextes</h2>

            <div className="section">Le site https://www.lhotel-thouars.fr contient des liens hypertextes vers d&apos;autres sites et dégage
                toute responsabilité à propos de ces liens externes ou des liens créés par d&apos;autres sites vers
                https://www.lhotel-thouars.fr.</div>

            <h2>6 - Droit applicable et attribution de juridiction</h2>

            <div className="section">Tout litige en relation avec l&apos;utilisation du site https://www.lhotel-thouars.fr est soumis au droit
                français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction
                aux tribunaux compétents de Niort.</div>

        </div>
    </div>)
}

export default Mentions;