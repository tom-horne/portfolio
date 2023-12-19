import React from "react";
import Text from "../text";
import Banner from "../banner";

type BlockBuilderProps = {
    content: any
}

const BlockBuilder: React.FC<BlockBuilderProps> = ({ content }) => {
    return content?.map((component: any) => {
        switch (component.__typename) {
            case "TextRecord":
                return <Text title={component.title} text={component.text} image={component.image}/>
            case "BannerRecord":
                return <Banner title={component.title} description={component.description} image={component.image}/>
            default:
                return <div>No component found</div>
        }
    });
}

export default BlockBuilder