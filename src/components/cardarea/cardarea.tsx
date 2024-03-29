import React from "react";
import Card from "../card";

type CardAreaProps = {
  cards: any;
};

const CardArea: React.FC<CardAreaProps> = ({ cards }) => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[960px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4 md:px-0">
        {cards.map((card: any) => (
          <Card
            link={card?.link?.slug}
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
