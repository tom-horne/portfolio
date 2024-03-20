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
        className="md:flex md:flex-row bg-white w-full md:h-[24rem] shadow-md"
      >
        <div className="p-4 border-solid md:border-r-0 md:rounded-l-md border-slate-200">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-sm w-96 line-clamp-4">
            {description}
          </p>
        </div>
        <div>
          {image && (
            <DatoImage
              data={image.responsiveImage}
              objectFit="cover"
              className="md:rounded-r-md h-96"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
