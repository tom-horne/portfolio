import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Banner from ".";
import { waitFor } from "@testing-library/react";

describe("<Banner />", () => {
  const buttons = [
    {
      id: 1,
      title: "testButton",
      link: {
        id: "testId",
        slug: "testSlug",
      },
      colour: "",
    },
  ];
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
  it("renders a title in the banner", () => {
    render(<Banner title={"testTitle"} description={""} />);

    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });

  it("renders a description in the banner", () => {
    render(<Banner title={""} description={"testDescription"} />);

    expect(screen.getByText("testDescription")).toBeInTheDocument();
  });

  it("renders a button in the banner", () => {
    render(<Banner title={""} description={""} buttons={buttons} />);

    expect(screen.getByText("testButton")).toBeInTheDocument();
  });

  it("links to the correct page", () => {
    render(<Banner title={""} description={""} buttons={buttons} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "testSlug");
  });

  test("if there is an imag and alt text", () => {
    // arrange

    // act
    render(
      <Banner title={""} description={""} buttons={buttons} image={image} />
    );

    // assert
    expect(screen.getByRole("img")).toHaveAttribute("src", "testimg.png");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "altTest");
  });

  test("there is no image", () => {
    render(<Banner title={""} description={""} image={null} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
