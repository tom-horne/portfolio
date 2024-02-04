import React from "react";
import Text from "../text";
import Banner from "../banner";
// import Card from "../card";
import CardArea from "../cardarea";
import Header from "../header";
import Button from "../button";
import BigCardArea from "../bigcardarea";

type BlockBuilderProps = {
  content: any;
};

const BlockBuilder: React.FC<BlockBuilderProps> = ({ content }) => {
  return content?.map((component: any) => {
    switch (component.__typename) {
      case "HeaderRecord":
        return <Header title={component.title} subtitle={component.subtitle} />;
      case "TextRecord":
        return (
          <Text
            title={component.title}
            text={component.text}
            image={component.image}
          />
        );
      case "BannerRecord":
        return (
          <Banner
            title={component.title}
            description={component.description}
            image={component.image}
            buttons={component.buttons}
          />
        );
      // case "CardRecord":
      //   return (
      //     <Card
      //       link={component.link}
      //       key={component.id}
      //       title={component.title}
      //       description={component.description}
      //       image={component.image}
      //     />
      //   );
      case "CardareaRecord":
        return <CardArea cards={component.cards} />;
      case "BigcardareaRecord":
        return <BigCardArea bigcards={component.bigcards} />;
      case "ButtonRecord":
        return (
          <Button
            title={component.title}
            link={component.link.slug}
            colour={component.colour}
            key={component.id}
          />
        );
      default:
        return <div>No component found</div>;
    }
  });
};

export default BlockBuilder;
