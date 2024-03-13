import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardArea from ".";

describe("<CardArea />", () => {
  const cardsTest = [
    {
      id: 1,
      title: "testCard",
      description: "testDescription",
      link: {
        id: "testId",
        slug: "testSlug",
      },
      image: {
        responsiveImage: {
          sizes: "",
          src: "testimg.png",
          width: 0,
          height: 0,
          alt: "altTest",
          title: null,
          base64: "",
        },
      },
    },
    {
      id: 2,
      title: "testCard2",
      description: "testDescription2",
      link: {
        id: "testId2",
        slug: "testSlug2",
      },
      image: {
        responsiveImage: {
          sizes: "",
          src: "testimg2.png",
          width: 0,
          height: 0,
          alt: "altTest2",
          title: null,
          base64: "",
        },
      },
    },
  ];

  it("renders all cards", () => {
    render(<CardArea cards={cardsTest} />);

    expect(screen.getAllByTestId("card-component").length).toEqual(2);
  });
});
