import React from "react";
import { Image as DatoImage } from "react-datocms";

type TextProps = {
  title: string;
  text: string | TrustedHTML;
  image?: any;
};

const Text: React.FC<TextProps> = ({ title, text, image }) => {
  return (
    <main>
      <div className="mt-4 max-w-[960px] mx-auto px-4 md:px-0">
        {/* <h1>{title}</h1> */}
        <div dangerouslySetInnerHTML={{ __html: text }} />
        {image && <DatoImage data={image.responsiveImage} objectFit="cover" />}
      </div>
    </main>
  );
};

export default Text;
