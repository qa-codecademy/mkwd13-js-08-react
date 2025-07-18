import CartItem from "../CartItem/CartItem";
import "./CartList.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useAppSelector } from "../../utils/hooks";
import { selectProductsInCart, selectTotalAmount } from "../../state/selectors";

function CartList() {
  const navigate = useNavigate();

  const cartProducts = useAppSelector(selectProductsInCart);

  const total = useAppSelector(selectTotalAmount);

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className="CartList">
          <ol>
            {cartProducts.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ol>
          <div className="total">
            <span>
              Total: <strong>${total.toFixed(2)}</strong>
            </span>
            <Button onBtnClick={() => navigate("/checkout")}>
              Go to checkout
            </Button>
          </div>
        </div>
      ) : (
        <h3 className="CartList-heading">
          No products in cart... don't be scared of the weather!
        </h3>
      )}
    </>
  );
}

export default CartList;
