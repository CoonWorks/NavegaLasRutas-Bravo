import carrito from '../../assets/img/carrito.png';
import './CarroWidget.css';

export const CarroWidget = () => {
  return (
    <div className='carrocont'>
        <img src={carrito} alt="" />
        <p className='contador'>0</p>
    </div>
  )
}

export default CarroWidget;