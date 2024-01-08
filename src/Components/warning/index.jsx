import "../../Style/Components/warning/warning.scss"
import warning from  "../../assets/warning.svg"

const Warning = (Props) => {
    return (<div className={"warning-"+Props.style}>
<img src={warning} alt="warning" className={"warningimg-"+Props.style} />
<div className={"warningtxt-"+Props.style}>
    Lhotel sera fermé à partir du 10 Janvier 2024 et pour un durée indéterminée pour cause de travaux.
</div>
    </div>)
}

export default Warning