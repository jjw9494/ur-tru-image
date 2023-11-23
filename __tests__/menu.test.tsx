// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/Menu.test.tsx
import { render, fireEvent } from "@testing-library/react";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

describe("Menu", () => {
  it("renders without crashing", () => {
    const mockSearchFunc = jest.fn();

    render(<Menu close={close} search={mockSearchFunc} />);
  });

  it("calls search function when Search link is clicked", () => {
    const mockSearchFunc = jest.fn();

    const { getByText } = render(
      <Menu close={close} search={mockSearchFunc} />
    );

    fireEvent.click(getByText("Search"));

    expect(mockSearchFunc).toHaveBeenCalled();
  });
});
