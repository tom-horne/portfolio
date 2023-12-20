import React from "react";
import Card from "../card";

type CardAreaProps = {
    cards: any
}

const CardArea: React.FC<CardAreaProps> = ({ cards }) => {
    return cards.map((card: any) => {
        return (
            <div className="w-full mx-auto bg-pink-500">
                <div className="bg-blue-300 pt-4 mx-auto max-w-[1366px]">
                    <Card title={card.title} description={card.description} image={card.image} />
                </div>
            </div>
        );
    });

}

export default CardArea