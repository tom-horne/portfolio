import React from "react";
import { Image as DatoImage } from "react-datocms";

type CardProps = {
  key: string;
  title: string;
  description: string;
  image?: any;
};

const Card: React.FC<CardProps> = ({ key, title, description, image }) => {
  return (
    <div className="bg-slate-100 rounded-xl shadow-md max-w-md mx-auto overflow-hidden md:max-w-2xl">
      <div className="lg:flex">
        <div className="md:shrink">
          {image && (
            <DatoImage
              data={image.responsiveImage}
              objectFit="cover"
              className="h-48 w-full object-cover md:h-64 md:max-w-48"
            />
          )}
        </div>
        <div className="p-8 text-xs">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
