import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Banner from ".";

describe("<Banner />", () => {
  it("renders a title in the banner", () => {
    render(<Banner title={"testTitle"} description={""} />);

    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });

  it("renders a description in the banner", () => {
    render(<Banner title={""} description={"testDescription"} />);

    expect(screen.getByText("testDescription")).toBeInTheDocument();
  });

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

  it("renders a button in the banner", () => {
    render(<Banner title={""} description={""} buttons={buttons} />);

    expect(screen.getByText("testButton")).toBeInTheDocument();
  });

  it("links to the correct page", () => {
    render(<Banner title={""} description={""} buttons={buttons} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "testSlug");
  });

  // test("if there is an image", () => {
  //   render(
  //     <Banner
  //       title={""}
  //       description={""}
  //       buttons={buttons}
  //       image={"testimg.png"}
  //     />
  //   );

  //   expect(screen.getAllByRole("img")).toHaveAttribute("src", "testimg.png");
  // });
});
