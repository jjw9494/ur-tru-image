// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/NavController.test.tsx
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavController from "@/app/components/NavController";

describe("NavController", () => {
  it("renders without crashing", () => {
    render(<NavController />);
  });

  it("opens menu when menu button is clicked", () => {
    const { getByRole } = render(<NavController />);

    fireEvent.click(getByRole("button", { name: /menu/i }));

    // Add your assertions here to check if the menu is opened
  });

  it("opens filter when filter button is clicked", () => {
    const { getByRole } = render(<NavController />);

    fireEvent.click(getByRole("button", { name: /filter/i }));

    // Add your assertions here to check if the filter is opened
  });

  it("closes dropdown when close button is clicked", () => {
    const { getByRole } = render(<NavController />);

    fireEvent.click(getByRole("button", { name: /close/i }));

    // Add your assertions here to check if the dropdown is closed
  });

  it("opens search when search button is clicked", () => {
    const { getByRole } = render(<NavController />);

    fireEvent.click(getByRole("button", { name: /search/i }));

    // Add your assertions here to check if the search is opened
  });

  it("closes search when Enter is pressed", () => {
    const { getByRole } = render(<NavController />);

    fireEvent.keyDown(getByRole("textbox"), { key: "Enter", code: "Enter" });

    // Add your assertions here to check if the search is closed
  });
});
