// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/NavHead.test.tsx
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavHead from "../app/components/NavHead";

describe("NavHead", () => {
  it("renders without crashing", () => {
    const mockSearchFunc = jest.fn();

    render(<NavHead search={mockSearchFunc} />);
  });

  it("calls handleSearch function when Search button is clicked", () => {
    const mockSearchFunc = jest.fn();

    const { getByRole } = render(<NavHead search={mockSearchFunc} />);

    fireEvent.click(getByRole("button", { name: /search/i }));

    expect(mockSearchFunc).toHaveBeenCalled();
  });
});
