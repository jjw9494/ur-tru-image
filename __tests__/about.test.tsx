// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/Home.test.tsx
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../app/About/pages.tsx";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
    query: {},
  }),
}));

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("updates filterValue when filterValueInput is called", () => {
    const { getByPlaceholderText } = render(<Home />);

    fireEvent.change(getByPlaceholderText("Filter"), {
      target: { value: "test" },
    });

    // Replace 'Filter' with the actual placeholder of your filter input
    // Add your assertions here to check if filterValue is updated correctly
  });
});
