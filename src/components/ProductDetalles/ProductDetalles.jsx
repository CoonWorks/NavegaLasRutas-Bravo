const ProductDetalles = ({ product }) => {
    return (
        <div>
            <img src={ product.image } alt="" />
            <h2>{ product.nombre }</h2>
            <h2>{ product.descripcion }</h2>
            <h2>Precio: { product.precio }</h2>
        </div>
    )
}

export default ProductDetalles