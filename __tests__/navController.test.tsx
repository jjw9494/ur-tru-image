import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavController from "@/app/components/NavController";

//Window Width setter
const resizeWindow = (x: number) => {
  window.innerWidth = x;
  window.dispatchEvent(new Event("resize"));
};

//Cleanup
afterEach(() => {
  cleanup();
});

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

describe("NavController Component", () => {
  it("renders without crashing", () => {
    const mockFilterFunc = jest.fn();
    const mockSearchInputValue = jest.fn();

    render(
      <NavController
        filterFunc={mockFilterFunc}
        filterValue={""}
        searchValue=""
        handleSearchInputValue={mockSearchInputValue}
      />
    );
  });

  it("renders MENU", () => {
    const mockFilterFunc = jest.fn();
    const mockSearchInputValue = jest.fn();
    render(
      <NavController
        filterFunc={mockFilterFunc}
        filterValue={""}
        searchValue=""
        handleSearchInputValue={mockSearchInputValue}
      />
    );

    const menuText = screen.getByText("MENU");

    expect(menuText).toBeInTheDocument();
  });

  it("renders MENU items onClick", () => {
    const mockFilterFunc = jest.fn();
    const mockSearchInputValue = jest.fn();
    render(
      <NavController
        filterFunc={mockFilterFunc}
        filterValue={""}
        searchValue=""
        handleSearchInputValue={mockSearchInputValue}
      />
    );

    const menuText = screen.getByText("MENU");
    fireEvent.click(menuText);

    const feed = screen.getByText("Feed");
    const artists = screen.getByText("Artists");
    const shop = screen.getByText("Shop");
    const about = screen.getByText("About");
    const close = screen.getByText("CLOSE");

    expect(feed).toBeInTheDocument();
    expect(artists).toBeInTheDocument();
    expect(shop).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(close).toBeInTheDocument();
  });

  it("renders MENU items onClick", () => {
    resizeWindow(600);
    const mockFilterFunc = jest.fn();
    const mockSearchInputValue = jest.fn();
    render(
      <NavController
        filterFunc={mockFilterFunc}
        filterValue={""}
        searchValue=""
        handleSearchInputValue={mockSearchInputValue}
      />
    );

    const menuText = screen.getByText("MENU");
    fireEvent.click(menuText);

    const feed = screen.getByText("Feed");
    const artists = screen.getByText("Artists");
    const shop = screen.getByText("Shop");
    const about = screen.getByText("About");
    const close = screen.getByText("CLOSE");

    expect(feed).toBeInTheDocument();
    expect(artists).toBeInTheDocument();
    expect(shop).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(close).toBeInTheDocument();

    fireEvent.click(close);

    expect(feed).not.toBeInTheDocument();
    expect(artists).not.toBeInTheDocument();
    expect(shop).not.toBeInTheDocument();
    expect(about).not.toBeInTheDocument();
    expect(close).not.toBeInTheDocument();
  });

  it("test function calls", () => {
    resizeWindow(1000);
    const mockFilterFunc = jest.fn();
    const mockSearchInputValue = jest.fn();
    render(
      <NavController
        filterFunc={mockFilterFunc}
        filterValue={""}
        searchValue=""
        handleSearchInputValue={mockSearchInputValue}
      />
    );

    fireEvent.click(screen.getByText("Feed"));
    const videoButton = screen.getByText("Video");
    fireEvent.click(videoButton);

    expect(mockFilterFunc).toHaveBeenCalled();
  });
});
