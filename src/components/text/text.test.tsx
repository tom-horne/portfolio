import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Text from ".";

describe("<Text />", () => {
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
  it("renders text in the text component", () => {
    render(<Text text={"testText"} />);

    expect(screen.getByText("testText")).toBeInTheDocument();
  });

  it("has an imag and alt text", () => {
    render(<Text text={""} image={image} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "testimg.png");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "altTest");
  });

  it("has no image", () => {
    render(<Text text={""} image={null} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
