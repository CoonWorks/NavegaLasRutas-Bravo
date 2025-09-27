import './ProductContenedor.css';

const ProductContenedor = (props) => {
  return (
    <div className='container'>
      <h2>{props.saludo}</h2>
    </div>
  )
}

export default ProductContenedor