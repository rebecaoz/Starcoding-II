import DetailComponent from "../components/DetailComponent"
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";


const DetailContainer = () =>{
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect (()=> {
        async function fetchData(){
            const response = await fetch(`https://api.mercadolibre.com/items/${params.id}`);
            const data = await response.json();
            console.log(data);
            setProduct(data);
            
        }
        
        fetchData();
        
       
    },[params.id])

    return(
        <DetailComponent producto={product}/>
    )
}
export default DetailContainer;