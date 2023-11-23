// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/Search.test.tsx
import {
  render,
  fireEvent,
  getByLabelText,
  getAllByLabelText,
} from "@testing-library/react";
import Search from "../app/components/Search";

describe("Search", () => {
  it("calls handleSearch function when search input changes", () => {
    const mockSearchFunc = jest.fn();

    const { getByPlaceholderText } = render(
      <Search searchFunc={mockSearchFunc} />
    );

    fireEvent.change(getAllByL("Type to search..."), {
      target: { value: "test" },
    });

    // Replace 'Search' with the actual placeholder of your search input
    // Add your assertions here to check if handleSearch works correctly
  });
});
