import React from "react";
import Text from "../text";

type BlockBuilderProps = {
    content: any
}

const BlockBuilder: React.FC<BlockBuilderProps> = ({ content }) => {
    return content.map((component: any) => {
        switch (component.__typename) {
            case "TextRecord":
                return <Text title={component.title} text={component.text} />;
            // case "BannerRecord":
            //     return <Banner/>
            default:
                return <div>No components found</div>
        }
    });
}

export default BlockBuilder