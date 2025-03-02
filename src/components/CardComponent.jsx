import { Link } from "react-router-dom";

const CardComponent = ({product, agregarAlCarrito}) =>{
  
    return(
        
        <div className="col">
          <div className="card h-100">
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title fs-6">{product.title}</h5>
              <p className="card-text"></p>
              <div className="row">
                <button className="col btn btn-primary btn-sm" onClick={(event)=>{agregarAlCarrito(event, product)}}>Agregar al carrito</button>
                <Link to={`/products/detail/${product.id}`}className="col"><button className="btn btn-primary btn-sm">Ver detalle</button></Link>
              </div> 
            </div>
          </div>
        </div>
    )
}
export default CardComponent;