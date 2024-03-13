import React from "react";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";

type BigCardProps = {
  link?: string;
  title: string;
  description: string;
  image?: any;
};

const BigCard: React.FC<BigCardProps> = ({
  link,
  title,
  description,
  image,
}) => {
  return (
    <Link href={link ?? ""} className="no-underline">
      <div
        data-testid="bigcard-component"
        className="bg-white w-full h-[36rem] rounded-md shadow-md"
      >
        {image && (
          <DatoImage
            data={image.responsiveImage}
            objectFit="cover"
            className="rounded-t-md h-96"
          />
        )}
        <div className="p-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-sm line-clamp-4">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
