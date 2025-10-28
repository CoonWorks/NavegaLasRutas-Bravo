import Product from "../Product/product";
import "./productlista.css";

const ProductLista = ({ products }) => {
    return (
        <div className="productlista">
            {
                products.map((product) => (
                    <Product product={ product } key={ product.id } />
                ))
            }
        </div>
    )
}

export default ProductLista