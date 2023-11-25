// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/Menu.test.tsx
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Menu from "@/app/components/Menu";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

//Cleanup
afterEach(() => {
  cleanup();
});

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

it("renders a Menu Container.", async () => {
  const mockCloseFunc = jest.fn();
  const mockSearchFunc = jest.fn();
  render(<Menu close={mockCloseFunc} search={mockSearchFunc} />);

  const menuContainer = screen.getByTestId("menu-container");

  expect(menuContainer).toBeInTheDocument();
});

it("renders a Menu Close button.", async () => {
  const mockCloseFunc = jest.fn();
  const mockSearchFunc = jest.fn();
  render(<Menu close={mockCloseFunc} search={mockSearchFunc} />);

  const menuClose = screen.getByText("CLOSE");

  expect(menuClose).toBeInTheDocument();
});

it("renders Menu links.", async () => {
  const mockCloseFunc = jest.fn();
  const mockSearchFunc = jest.fn();
  render(<Menu close={mockCloseFunc} search={mockSearchFunc} />);

  const feed = screen.getByText("Feed");
  const artists = screen.getByText("Artists");
  const shop = screen.getByText("Shop");
  const about = screen.getByText("About");

  expect(feed).toBeInTheDocument();
  expect(artists).toBeInTheDocument();
  expect(shop).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});

describe("Menu", () => {
  it("renders without crashing", () => {
    const mockSearchFunc = jest.fn();
    const mockCloseFunc = jest.fn();

    render(<Menu close={mockCloseFunc} search={mockSearchFunc} />);
  });
});
