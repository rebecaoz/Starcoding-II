import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CardContainer from './containers/CardContainer';
import HomeContainer from './containers/HomeContainer';
import RegisterComponent from './components/RegisterComponent'
import { EcommerceProvider } from './context/EcommerceContext';
import { useDispatch, useSelector } from 'react-redux';
import { addElementToCart } from './redux/actions/cart';
import DetailContainer from './containers/DetailContainer';

function App() {
  
  const state = useSelector(state=>state.cartReducer);
  const dispatch = useDispatch();
  //console.log(state);
  return (
    <div className="App">
      <BrowserRouter>
        <EcommerceProvider>
          <Routes>
            <Route exact path="/" element={<HomeContainer/>}/>
            <Route exact path="/products" element={<CardContainer/>}/>
            <Route path="/products/:busqueda" element={<CardContainer/>}/>
            <Route path="/register" element={<RegisterComponent/>}/>
            <Route path='/products/detail/:id' element={<DetailContainer/>}/>
          </Routes>
        </EcommerceProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

// {state.length}
//<button onClick={()=>dispatch(addElementToCart('nuevo elemento'))}>Agregar elemento</button>
