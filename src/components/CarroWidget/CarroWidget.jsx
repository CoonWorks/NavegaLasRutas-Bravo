import { FaCartShopping } from 'react-icons/fa6';
import './carrowidget.css';

export const CarroWidget = () => {
  return (
    <div className="carrowidget">
        <FaCartShopping size={30} />
        <p>3</p>
    </div>
  )
}

export default CarroWidget;