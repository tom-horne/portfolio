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
});
