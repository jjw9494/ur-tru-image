import { render, fireEvent, screen } from "@testing-library/react";
import Search from "@/app/components/Search";
import "@testing-library/jest-dom";

describe("Search Component", () => {
	it("renders without crashing and mock functions", () => {
		const mockHandleSearchInputValue = jest.fn();
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();
		const searchValue = "initialValue";

		render(
			<Search
				handleSearchInputValue={mockHandleSearchInputValue}
				close={mockClose}
				closeOnEnter={mockCloseOnEnter}
				searchValue={searchValue}
			/>
		);

		const searchContainer = screen.getByTestId("search-container");

		expect(searchContainer).toBeInTheDocument();
	});

	it("calls handleSearchInputValue when input value changes", () => {
		const mockHandleSearchInputValue = jest.fn();
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();
		const searchValue = "initialValue";

		const { getByLabelText } = render(
			<Search
				handleSearchInputValue={mockHandleSearchInputValue}
				close={mockClose}
				closeOnEnter={mockCloseOnEnter}
				searchValue={searchValue}
			/>
		);

		const searchInput = getByLabelText("Type to search...");
		fireEvent.change(searchInput, { target: { value: "test" } });

		expect(mockHandleSearchInputValue).toHaveBeenCalledWith("test");
	});

	it("calls close function when close button is clicked", () => {
		const mockHandleSearchInputValue = jest.fn();
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();
		const searchValue = "initialValue";

		const { getByText } = render(
			<Search
				handleSearchInputValue={mockHandleSearchInputValue}
				close={mockClose}
				closeOnEnter={mockCloseOnEnter}
				searchValue={searchValue}
			/>
		);

		const closeButton = getByText("CLOSE");
		fireEvent.click(closeButton);

		expect(mockClose).toHaveBeenCalled();
	});
});
