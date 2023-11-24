import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../app/about/page";

describe("About", () => {
  it("renders without crashing", () => {
    render(<About />);
  });

  it("renders a h1 element with the text content About", () => {
    const { getByRole } = render(<About />);

    const heading = getByRole("heading", { name: /about./i, level: 1 });

    expect(heading).toBeInTheDocument();
  });
  it("renders a h2 element with the text content Lorem", () => {
    const { getByRole } = render(<About />);

    const aboutText = getByRole("heading", { name: /lorem/i, level: 2 });
    expect(aboutText).toBeInTheDocument();
  });
});
