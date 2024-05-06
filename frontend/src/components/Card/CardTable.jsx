import { useContext } from "react";
import CardItem from "./CardItem";
import { CartContext } from "../../context/CartProvider";

const CardTable = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <table className="shop-table">
      <thead>
        <tr>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Product</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody className="cart-wrapper">
      {cartItems.map((item) => (
          <CardItem cartItem={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};
export default CardTable;
