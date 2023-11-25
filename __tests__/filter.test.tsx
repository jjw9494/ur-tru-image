import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "@/app/components/Filter";

//Cleanup
afterEach(() => {
  cleanup();
});

describe("Filter", () => {
  it("renders without crashing", () => {
    const mockFilterFunc = jest.fn();
    const mockClose = jest.fn();

    render(<Filter close={mockClose} filterFunc={mockFilterFunc} />);
  });

  //Filter tests
  it("renders a Filter container.", async () => {
    const mockFilterFunc = jest.fn();
    const mockClose = jest.fn();

    render(<Filter close={mockClose} filterFunc={mockFilterFunc} />);

    const filters = screen.getByTestId("filter-container");

    expect(filters).toBeInTheDocument();
  });

  it("renders a Filter Head.", async () => {
    const mockFilterFunc = jest.fn();
    const mockClose = jest.fn();

    render(<Filter close={mockClose} filterFunc={mockFilterFunc} />);

    const filterHead = screen.getByText("CLOSE");

    expect(filterHead).toBeInTheDocument();
  });

  it("renders Filter links.", async () => {
    const mockFilterFunc = jest.fn();
    const mockClose = jest.fn();

    render(<Filter close={mockClose} filterFunc={mockFilterFunc} />);

    const releases = screen.getByText("Releases");
    const editorial = screen.getByText("Editorial");
    const video = screen.getByText("Video");
    const events = screen.getByText("Events");
    const radio = screen.getByText("Radio");
    const seeAll = screen.getByText("See All");

    expect(releases).toBeInTheDocument();
    expect(editorial).toBeInTheDocument();
    expect(video).toBeInTheDocument();
    expect(events).toBeInTheDocument();
    expect(radio).toBeInTheDocument();
    expect(seeAll).toBeInTheDocument();
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
