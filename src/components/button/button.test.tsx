import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Button title={""} colour={undefined} link={""} />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
