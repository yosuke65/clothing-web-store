//@ts-nocheck
import { CartItemContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.tsx';
import './cart-icon.styles.tsx'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

const CartIcon = () => {

  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  )
}

export default CartIcon;