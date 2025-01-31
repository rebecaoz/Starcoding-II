import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import { Link } from "react-router-dom";

const HomeContainer = () =>{

    const {carrito} = useContext(EcommerceContext);

    return(
        <><Link to="/products">Ir a productos</Link>
        <h1>Tenés {carrito.length} en tu carrito</h1></>
    )
}

export default HomeContainer;