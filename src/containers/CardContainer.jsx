import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";

const CardContainer = () =>{
    const [carrito, setCarrito] = useState([])

    const [products, setProducts] = useState([]);

    useEffect(async ()=>{
        //Para cuando se está por montar un componenete
        //Llamada a una api
        let data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatos');
        let reponse = await data.json();
        console.log(reponse);
        /*
        const data = [{
            id: 0,
            name: 'shoes',
            img: 'https://avatar.iran.liara.run/public/12'
        },
        {
            id: 1,
            name: 'short',
            img: 'https://avatar.iran.liara.run/public/13'
        },
        {
            id: 2,
            name: 'skirt',
            img: 'https://avatar.iran.liara.run/public/14'
        }]
        setProducts(data);*/
        
        return ()=>{
            //Cuando se está por morir el componente
        }
    }, []);

    const AgregarAlCarrito= (event, product) =>{
        //alert("hola mundo");
        carrito.push(product);
        setCarrito([...carrito]);
        console.log(carrito);
    }
    
    return (
        <div className="container">
            <InfoBarComponent carrito={carrito}/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map(element=>{
                    return(
                        <CardComponent product={element} agregarAlCarrito = {AgregarAlCarrito} img= {element.img} key={element.id}/>
                    )
                })}
                
            </div>
        </div>
        
    )
}
export default CardContainer;