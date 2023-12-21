import React from "react";
import Card from "../card";

type CardAreaProps = {
  cards: any;
};

const CardArea: React.FC<CardAreaProps> = ({ cards }) => {
  return (
    <div className="w-full bg-pink-500">
      <div className="bg-blue-300 pt-4 mx-auto max-w-[1366px] grid md:grid-cols-2 grid-cols-1 gap-4">
        {cards.map((card: any) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardArea;
