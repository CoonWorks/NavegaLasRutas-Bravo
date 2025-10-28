import { useState, useEffect } from "react";
import getProducts from "../../data/products";
import ProductDetalles from "../ProductDetalles/ProductDetalles";
import { useParams } from "react-router-dom";

const ProductDetallesContenedor = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProducts()
            .then((data) => {
                const dataProducto = data.find((product) => product.id === parseInt(id));
            })
    }, []);

    return (
        <div>
            <ProductDetalles product = { product } />
        </div>
    )
}

export default ProductDetallesContenedor