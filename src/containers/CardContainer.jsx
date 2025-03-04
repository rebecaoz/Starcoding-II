import { lazy, Suspense, useContext, useEffect, useState } from "react";
import InfoBarComponent from "../components/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";
import { useParams } from "react-router-dom";

const CardComponent = lazy(()=> import('../components/CardComponent'));

const CardContainer = () =>{
    
    const {carrito, products, agregarAlCarrito, getData} = useContext(EcommerceContext);
    const {busqueda} = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getData(busqueda);
    }, [busqueda, getData]);

    // Actualizar productos filtrados cuando cambian los productos de la API
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    
    const handleKeyUp = (e) =>{
        //console.log(e.target.value);
        const aux = products.filter(element=>
            element.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setFilteredProducts(aux);
    }



    return (
        <div className="container">
            <InfoBarComponent carrito={carrito} handleKeyUp= {handleKeyUp}/>
            <div className="row row-cols row-cols-md-4 g-4">
                {filteredProducts.map(element=>{
                    return(
                        <Suspense fallback={<div>Cargando...</div>}>
                            <CardComponent product={element} img= {element.img} key={element.id} agregarAlCarrito={agregarAlCarrito}/>
                        </Suspense>
                    )
                })}
                
            </div>
        </div>
        
    )
}
export default CardContainer;