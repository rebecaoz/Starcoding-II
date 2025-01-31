import { useContext, useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";
import { useParams } from "react-router-dom";


const CardContainer = () =>{
    
    const {carrito, products, agregarAlCarrito, getData} = useContext(EcommerceContext);
    const {busqueda} = useParams();
    const [searchWord, setSearchWord] = useState();

    const handleKeyUp = (e) =>{
        setSearchWord(e.target.value);
        console.log(e.target.value);
        const aux = products.filter(element=>e.target.value.match(element.title))
        console.log(aux);
    }

    useEffect(() => {
        getData(busqueda);
    }, [busqueda, getData]);
    
    return (
        <div className="container">
            <InfoBarComponent carrito={carrito} handleKeyUp= {handleKeyUp}/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map(element=>{
                    return(
                        <CardComponent product={element} img= {element.img} key={element.id} agregarAlCarrito={agregarAlCarrito}/>
                    )
                })}
                
            </div>
        </div>
        
    )
}
export default CardContainer;