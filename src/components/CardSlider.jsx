import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Cards from "./Cards";
import { getTokens } from "../services/api";
import { usePatientId } from "../context/usePatient";

const CardSlider = () => {
  const [cardsData, setCardsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { patientId } = usePatientId();

  const fetchAllTokens = async () => {
    try {
      const locationId = "12";
      const data = await getTokens(locationId);

      let filteredTokens = data
        .filter((item) => item.status === "active")
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 6);

      const activeCards = filteredTokens.map((item) => ({
        id: item.id,
        roomNo: item.room,
        tokenNo: item.token_no,
        updatedAt: item.updated_at,
        currentPatientId: item.patient_id,
      }));

      setCardsData(activeCards);
    } catch (error) {
      console.error("Error fetching tokens:", error);
    }
  };

  useEffect(() => {
    const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
      cluster: "mt1",
    });
    const channel = pusher.subscribe("call-channel");
    const channel1 = pusher.subscribe("end-channel");
    channel.bind("call-event", function (data) {
      fetchAllTokens();
    });
    channel1.bind("end-event", function (data) {
      console.log(data, "end-event");
      fetchAllTokens();
    });

    return () => {
      pusher.unsubscribe("call-channel");
      pusher.unsubscribe("end-channel");
    };
  }, [patientId]);

  useEffect(() => {
    if (cardsData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      }, 3000);

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
