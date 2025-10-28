import { useState, useEffect } from "react";
import ProductLista from "../ProductLista/ProductLista";
import './productlistacontenedor.css';
import getProducts from "../../data/products";
import { useParams } from "react-router-dom";

const ProductListaContenedor = ({ bienvenida }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        if(categoria){
          const productosFiltro = data.filter((product) => product.categoria === categoria);
          setProducts(productosFiltro);
        } else {
          setProducts(data);
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, [categoria])

  return (
    <div className="productlistacontenedor">
      <h2>{ bienvenida }</h2>
      {
        loading ? <div>Cargando datos...</div> : <ProductLista products = { products } />
      }
    </div>
  )
}

export default ProductListaContenedor