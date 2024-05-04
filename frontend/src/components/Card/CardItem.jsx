import PropTypes from "prop-types"
import { useContext } from "react";
import { CardContext } from "../../context/CardProvider";

const CardItem = (cardItem) => {
  const { removeFromcard } = useContext(CardContext);
  return (
    <tr className="card-item">
      <td></td>
      <td className="card-image">
      <img src={cardItem.img.singleImage} alt="" />
        <i
          className="bi bi-x delete-card"
          onClick={() => removeFromcard(cardItem.id)}
        ></i>
      </td>
      <td>{cardItem.name}</td>
      <td>$108.00</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$108.00</td>
    </tr>
  );
};

export default CardItem;

CardItem.propTypes = {
  cardItem: PropTypes.object
}