import React from "react";
import { Image as DatoImage } from "react-datocms";

type BannerProps = {
    title: string,
    description: string
    image?: any
}

const Banner: React.FC<BannerProps> = ({title, description, image}) => {
    return(
        <div className="mt-12 w-full bg-yellow-600 mx-auto p-4">
            <div className="bg-green-100 mx-auto max-w-[1366px] justify-between flex">
                <div className="my-auto bg-red-400">
                    <h2>{title}</h2>
                </div>
                <div className="my-auto bg-blue-400">
                    <h4>{description}</h4>
                </div>

                <div className="bg-red-200 flex justify-between">
                    <DatoImage data={image.responsiveImage}/>
                </div>
            </div>
        </div>
    )
}

export default Banner