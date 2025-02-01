import { useContext, useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";
import { useParams } from "react-router-dom";


const CardContainer = () =>{
    
    const {carrito, products, agregarAlCarrito, getData} = useContext(EcommerceContext);
    const {busqueda} = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getData(busqueda);
    }, [busqueda]);

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
                        <CardComponent product={element} img= {element.img} key={element.id} agregarAlCarrito={agregarAlCarrito}/>
                    )
                })}
                
            </div>
        </div>
        
    )
}
export default CardContainer;