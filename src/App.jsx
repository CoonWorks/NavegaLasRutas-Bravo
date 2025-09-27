import NavBar from './components/NavBar/NavBar.jsx';
import ProductContenedor from './components/ProductContenedor/ProductContenedor.jsx';
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ProductContenedor saludo={ "¡Bienvenido a la tienda!" } />
    </div>
  )
}

export default App
