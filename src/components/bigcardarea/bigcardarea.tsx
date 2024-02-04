import React from "react";
import BigCard from "../bigcard";

type BigCardAreaProps = {
  bigcards: any;
};

const BigCardArea: React.FC<BigCardAreaProps> = ({ bigcards }) => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[960px] grid grid-cols-1 gap-4 px-4 md:px-0">
        {bigcards.map((bigcard: any) => (
          <BigCard
            link={bigcard?.link?.slug}
            key={bigcard.id}
            title={bigcard.title}
            description={bigcard.description}
            image={bigcard.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BigCardArea;
