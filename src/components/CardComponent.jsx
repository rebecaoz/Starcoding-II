const CardComponent = ({product, agregarAlCarrito, img}) =>{
   
    return(
        
        <div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text"></p>
              <button className="btn btn-primary" onClick={(event)=>{agregarAlCarrito(event, product)}}>Agregar al carrito</button>
            </div>
          </div>
        </div>
    )
}
export default CardComponent;