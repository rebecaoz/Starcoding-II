import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CardContainer from './containers/CardContainer';
import HomeContainer from './containers/HomeContainer';
import { EcommerceProvider } from './context/EcommerceContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EcommerceProvider>
          <Routes>
            <Route exact path="/" element={<HomeContainer/>}/>
            <Route exact path="/products" element={<CardContainer/>}/>
            <Route path="/products/:busqueda" element={<CardContainer/>}/>
          </Routes>
        </EcommerceProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
