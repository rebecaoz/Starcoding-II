import DetailComponent from "../components/DetailComponent"
import {useParams} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../context/EcommerceContext";


const DetailContainer = () =>{
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const {products} = useContext(EcommerceContext);
    /*
    useEffect (()=> {
        async function fetchData(){
            const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
            const data = await response.json();
            console.log(data);
            setProduct(data);
            
        }
        
        fetchData();
        
       
    },[params.id])
    */
    useEffect(()=>{
            let product= products.filter(element=>element.id===id)
            //console.log(product);
            setProduct(product[0]);
    },[id, products])

    return(
        <DetailComponent producto={product}/>
    )
}
export default DetailContainer;