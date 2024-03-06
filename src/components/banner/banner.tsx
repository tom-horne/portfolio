import React from "react";
import { Image as DatoImage } from "react-datocms";
import Button from "../button";

type Button = {
  id: number;
  title: string;
  colour: string;
  link?: any;
};

type BannerProps = {
  title: string;
  description: string;
  image?: any;
  buttons?: Button[];
};

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  image,
  buttons,
}) => {
  return (
    <div className="bg-blue-50 mt-4 w-full mx-auto p-4 min-h-16">
      <div className="mx-auto max-w-[960px] justify-between md:flex ">
        <div className="w-full">
          <div>
            <h2 className="mt-2">{title}</h2>
          </div>
          <div className="mt-2">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="block my-5">
            {buttons?.map((button: any) => (
              <Button
                title={button.title}
                colour={button.colour}
                link={button.link.slug}
                key={button.id}
              />
            ))}
          </div>
        </div>

        {image && (
          <div className="md:flex md:mx-auto md:pl-4 ">
            <DatoImage
              data={image.responsiveImage}
              objectFit="cover"
              className="rounded-xl block mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
