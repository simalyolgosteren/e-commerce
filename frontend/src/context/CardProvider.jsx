import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState(
    localStorage.getItem("cardItems")
      ? JSON.parse(localStorage.getItem("cardItems"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("cardItems", JSON.stringify(cardItems));
  }, [cardItems]);
  const addToCard = (cardItem) => {
    // setCardItems([...cardItems, cardItem]); 1. yol
    setCardItems((prevCard) => [...prevCard, cardItem]);
  };

  const removeFromCard = (itemId) => {
    const filteredCardItems = cardItems.filter((cardItem) => {
      return cardItem.id !== itemId;
    });
    setCardItems(filteredCardItems);
  };

  return (
    <CardContext.Provider
      value={{
        cardItems,
        addToCard,
        removeFromCard
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
export default CardProvider;
CardProvider.propTypes = {
  children: PropTypes.node,
};