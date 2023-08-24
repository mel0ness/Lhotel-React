import "../../Style/Components/Galerie/galerie.scss"

const Galerie = (Props) => {

    return (
        <div className={"galerie galerie"+Props.size}>
            <div className={"animation animation"+Props.size}>
            <img src={Props.src1} alt={Props.alt1} className="image image--0" />
            <img src={Props.src2} alt={Props.alt2} className="image image--1" />
            <img src={Props.src3} alt={Props.alt3} className="image image--2" /></div>
        </div>
    )
}

export default Galerie;