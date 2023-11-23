import { render, fireEvent } from "@testing-library/react";
import Filter from "@/app/components/Filter";

describe("Filter", () => {
  it("renders without crashing", () => {
    const mockFilterFunc = jest.fn();
    const mockClose = jest.fn();

    render(<Filter close={mockClose} filterFunc={mockFilterFunc} />);
  });

  it("calls handleAll function when See All is clicked", () => {
    const mockFilterFunc = jest.fn();
    const mockClose = jest.fn();

    const { getByText } = render(
      <Filter close={mockClose} filterFunc={mockFilterFunc} />
    );

    fireEvent.click(getByText("See All"));
  });
});
