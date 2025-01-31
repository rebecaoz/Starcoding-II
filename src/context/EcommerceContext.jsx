const { createContext, useState} = require("react");

export const EcommerceContext = createContext();

export const EcommerceProvider = ({children}) =>{

    const [products, setProducts] = useState([]);
    const [carrito, setCarrito] = useState([]);
    

    const agregarAlCarrito= (event, product) =>{
        carrito.push(product);
        setCarrito([...carrito]);
        //console.log(carrito);
    }
    
    const getData = async (busqueda) =>{
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`);
        const data = await response.json();
        setProducts(data.results);
        //console.log(data.results);
    }
    
    return <EcommerceContext.Provider value={{products, agregarAlCarrito, carrito, getData}}>
        {children}
    </EcommerceContext.Provider>
}
