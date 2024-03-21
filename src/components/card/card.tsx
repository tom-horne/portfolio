import React from "react";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";

type CardProps = {
  link?: string;
  title: string;
  description: string;
  image?: any;
};

const Card: React.FC<CardProps> = ({ link, title, description, image }) => {
  return (
    // <div className="bg-white rounded-xl border-[0.5px] border-solid border-slate-300 shadow-md max-w-md md:mx-auto mx-4 overflow-hidden md:max-w-2xl">
    //   <div className="lg:flex">
    //     <div className="md:shrink">
    //       {image && (
    //         <DatoImage
    //           data={image.responsiveImage}
    //           objectFit="cover"
    //           className="h-72 w-full object-cover md:h-64"
    //         />
    //       )}
    //     </div>
    //     <div className="p-8 text-xs">
    //       <h3>{title}</h3>
    //       <p className="text-black">{description}</p>
    //     </div>
    //   </div>
    // </div>

    <Link href={link ?? ""} className="no-underline">
      <div
        data-testid="card-component"
        className="rounded-md shadow-md hover:bg-slate-50"
      >
        {image && (
          <DatoImage
            data={image.responsiveImage}
            objectFit="cover"
            className="rounded-t-md h-56"
          />
        )}
        <div className="px-6 py-4 h-[168px]">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-sm line-clamp-4">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
