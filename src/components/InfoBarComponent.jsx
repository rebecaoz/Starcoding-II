import { Link } from "react-router-dom";

const InfoBarComponent = ({carrito, handleKeyUp}) =>{

    
    return(
       
        <div>
            <input type="text" onInput={handleKeyUp} placeholder="Buscar producto"/>
            <button className="btn btn-primary m-2">
                <Link to="/" className="text-light">Ir a Home</Link>
            </button>
            Elementos en el carrito: {carrito.length}
        </div>
    )
}
export default InfoBarComponent;