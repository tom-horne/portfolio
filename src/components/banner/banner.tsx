import React from "react";
import { Image as DatoImage } from "react-datocms";

type BannerProps = {
  title: string;
  description: string;
  image?: any;
};

const Banner: React.FC<BannerProps> = ({ title, description, image }) => {
  return (
    <div className="bg-blue-50 mt-4 w-full mx-auto p-4 min-h-16">
      <div className="mx-auto max-w-[960px] justify-between md:flex ">
        <div className="w-full pt-2">
          <div>
            <h2>{title}</h2>
          </div>
          <div className="mt-2">
            <p>{description}</p>
          </div>
        </div>

        {image && (
          <div className="md:flex justify-between pl-4">
            <DatoImage
              data={image.responsiveImage}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
