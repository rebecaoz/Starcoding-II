const CardComponent = ({product, agregarAlCarrito}) =>{
   
    return(
        
        <div className="col">
          <div className="card h-100">
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title fs-6">{product.title}</h5>
              <p className="card-text"></p>
              <button className="btn btn-primary fs-6" onClick={(event)=>{agregarAlCarrito(event, product)}}>Agregar al carrito</button>
            </div>
          </div>
        </div>
    )
}
export default CardComponent;