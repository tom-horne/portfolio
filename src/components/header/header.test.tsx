import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from ".";

describe("<Header />", () => {
  it("renders title text in the header", () => {
    render(<Header title={"testTitle"} subtitle={"testSubtitle"} />);

    expect(screen.getByText("testTitle")).toBeInTheDocument();
    expect(screen.getByText("testSubtitle")).toBeInTheDocument();
  });

  it("renders component with no title or subtitle text", () => {
    render(<Header title={""} subtitle={""} />);

    expect(screen.queryByText("testText")).not.toBeInTheDocument();
  });
});
