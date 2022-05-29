//@ts-nocheck
import { useNavigate } from "react-router";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  console.log('cart dropdown');

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => {
          goToCheckoutHandler();
          toggleIsCartOpen();
        }}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
