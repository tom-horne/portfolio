import React from "react";
import { Image as DatoImage } from "react-datocms";

type BannerProps = {
  title: string;
  description: string;
  image?: any;
};

const Banner: React.FC<BannerProps> = ({ title, description, image }) => {
  return (
    <div className="mt-4 w-full bg-yellow-600 mx-auto p-4 min-h-16">
      <div className="bg-green-200 mx-auto max-w-[1366px] justify-between md:flex ">
        <div className="w-full pt-2">
          <div className="bg-red-400">
            <h2>{title}</h2>
          </div>
          <div className="bg-blue-400 mt-2">
            <h4>{description}</h4>
          </div>
        </div>

        {image && (
          <div className="bg-red-200 md:flex justify-between pl-4">
            <DatoImage data={image.responsiveImage} objectFit="cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
