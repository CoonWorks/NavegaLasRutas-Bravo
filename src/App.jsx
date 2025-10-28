import NavBar from './components/NavBar/NavBar.jsx';
import ProductListaContenedor from './components/ProductListaContenedor/ProductListaContenedor.jsx';
import ProductDetallesContenedor from './components/ProductDetallesContenedor/ProductDetallesContenedor.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ProductListaContenedor bienvenida={"¡Bienvenidos a Gunpla Bragado!"} /> } />
          <Route path="/categoria/:categoria" element={ <ProductListaContenedor bienvenida={"¡Bienvenidos a Gunpla Bragado!"} /> } />
          <Route path="/detalle/:id" element={ <ProductDetallesContenedor /> } />
          <Route path="*" element={ <div>Error 404 - No encontrado</div> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
