import React from "react";
import { Image as DatoImage } from "react-datocms";

type CardProps = {
    id: string,
    title: string,
    description: string,
    image?: any
}

const Card: React.FC<CardProps> = ({ id, title, description, image }) => {

    console.log('====================================');
    console.log("IMAGE ",image);
    console.log('====================================');

    return(
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
            <div className="md:shrink-0">
              {/* <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
                { image && <DatoImage data={image.responsiveImage} className="h-48 w-full object-cover md:h-full md:w-48" /> }
            </div>
           <div className="p-8">
               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                   {/* <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a> */}
                   <p className="mt-2 text-slate-500">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card