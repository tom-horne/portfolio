import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from ".";

describe("< />", () => {
  const image = {
    responsiveImage: {
      sizes: "",
      src: "testimg.png",
      width: 0,
      height: 0,
      alt: "altTest",
      title: null,
      base64: "",
    },
  };

  it("renders card component", () => {
    render(
      <Card
        link="testSlug"
        title="testCard"
        description="testDescription"
        image={image}
      />
    );

    expect(screen.getByText("testCard")).toBeInTheDocument();
  });

  it("renders description in card component", () => {
    render(
      <Card
        link="testSlug"
        title="testCard"
        description="testDescription"
        image={image}
      />
    );

    expect(screen.getByText("testDescription")).toBeInTheDocument();
  });

  it("links to the correct page", () => {
    render(
      <Card
        link="testSlug"
        title="testCard"
        description="testDescription"
        image={image}
      />
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "testSlug");
  });

  test("if there is an image and alt text", () => {
    render(
      <Card
        link="testSlug"
        title="testCard"
        description="testDescription"
        image={image}
      />
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", "testimg.png");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "altTest");
  });

  test("there is no image", () => {
    const cardsTestNoImg = [
      {
        id: 1,
        title: "testCard",
        description: "testDescription",
        link: {
          id: "testId",
          slug: "testSlug",
        },
        image: null,
      },
    ];
    render(
      <Card
        link="testSlug"
        title="testCard"
        description="testDescription"
        image={null}
      />
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
