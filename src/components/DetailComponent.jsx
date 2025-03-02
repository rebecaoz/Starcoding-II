const DetailComponent = ({producto}) =>{
    //console.log(producto);
    if (!producto) {
        return <p>Cargando producto...</p>;
    }
    return(
        <div className="d-flex justify-content-center">
            <div className="card mb-3">
                <img src={producto.pictures[0].url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Price: {producto.price}</h5>
                    <p className="card-text">{producto.title}</p>
                    <p className="card-text"><small className="text-body-secondary"></small></p>
                </div>
            </div>
        </div>
        
    )
}
export default DetailComponent;