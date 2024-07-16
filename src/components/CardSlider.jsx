import { useEffect, useState } from "react";
import Cards from "./Cards";
import { getTokens } from "../services/api";

const CardSlider = () => {
  const [cardsData, setCardsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const locationId = "12";
    getTokens(locationId)
      .then((data) => {
        const activeCards = data
          .filter((item) => item.status === "active")
          .slice(0, 6)
          .map((item) => ({
            id: item.id,
            roomNo: item.room,
            tokenNo: item.token_no,
            updatedAt: item.updated_at,
          }));
        setCardsData(activeCards);
      })
      .catch((error) => {
        console.error("Error fetching tokens:", error);
      });
  }, []);

  useEffect(() => {
    if (cardsData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [cardsData]);

  const renderCards = (start, end) =>
    cardsData
      .slice(start, end)
      .map((card, index) => (
        <Cards
          key={card.id}
          roomNo={card.roomNo}
          tokenNo={card.tokenNo}
          isActive={index === currentIndex % 3}
        />
      ));

  return (
    <div>
      <div className="flex justify-center">{renderCards(0, 3)}</div>
      <div className="flex justify-center">{renderCards(3, 6)}</div>
    </div>
  );
};

export default CardSlider;
