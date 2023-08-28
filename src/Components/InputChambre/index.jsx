import "../../Style/Components/InputChambre/inputchambre.scss"

const InputChambre = (Props) => {


    return(
        <div>
            {Props.idprop === Props.check ?  <div id={Props.idprop} className="inputChambre selected">
                <label htmlFor={Props.type}>{Props.value}</label>
             <input type="radio" id={Props.type} name="chambre" value={Props.value} checked={Props.check === Props.idprop} onChange={() => Props.funct(Props.idprop)} required />
              </div>:  <div id={Props.idprop} className="inputChambre">
                <label htmlFor={Props.type}>{Props.value}</label>
             <input type="radio" id={Props.type} name="chambre" value={Props.value} checked={Props.check === Props.idprop} onChange={() => Props.funct(Props.idprop)} required />
              </div>}
   
              </div>)



}



export default InputChambre