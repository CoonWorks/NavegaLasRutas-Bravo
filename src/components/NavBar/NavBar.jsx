import './NavBar.css';
import logo from '../../assets/img/logo.png';
import CarroWidget from '../CarroWidget/CarroWidget.jsx';

const NavBar = () => {

    return(
        <nav className='navbar'>
            <img src={logo} className='logo' alt="" />
            <h2 className='titulo'>Gunpla Bragado</h2>
            <ul className='categorias'>
                <li>High Grade</li>
                <li>Real Grade</li>
                <li>Master Grade</li>
                <li>Herramientas</li>
            </ul>
            <CarroWidget />
        </nav>
    )
}

export default NavBar;