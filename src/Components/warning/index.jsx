import "../../Style/Components/warning/warning.scss"
import warning from  "../../assets/warning.svg"

const Warning = (Props) => {
    return (<div className={"warning-"+Props.style}>
<img src={warning} alt="warning" className={"warningimg-"+Props.style} />
<div className={"warningtxt-"+Props.style}>
    Lhotel ne sera ouvert qu&apos;à partir du lundi 5 Février 2024.
</div>
    </div>)
}

export default Warning