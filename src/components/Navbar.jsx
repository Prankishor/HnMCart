import './styles/navbar.css';
import { ReactComponent as HM } from '../img/HM.svg';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { cartTotalQuantity } = useSelector(state => state.cart)
    return (
        <div className='navbar_container'>
            <Link to='/'>
                <div className='logo'>
                    <HM className='HM' />
                </div>
            </Link>
            <Link to='/cart' style={{ textDecoration: "none" }}>
                <div className='cart_logo'>
                    <ShoppingBagOutlinedIcon fontSize='large' />
                    <div className='badge'>
                        <span>Shopping Bag ({cartTotalQuantity}) </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
