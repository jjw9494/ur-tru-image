import { render, fireEvent } from "@testing-library/react";
import Search from "@/app/components/Search";

describe("Search Component", () => {
	it("calls handleSearchInputValue when input value changes", () => {
		// Arrange
		const mockHandleSearchInputValue = jest.fn();
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();
		const searchValue = "initialValue";

		const { getByLabelText, getByPlaceholderText } = render(
			<Search
				handleSearchInputValue={mockHandleSearchInputValue}
				close={mockClose}
				closeOnEnter={mockCloseOnEnter}
				searchValue={searchValue}
			/>
		);

		// Act
		const searchInput = getByLabelText("Type to search...");
		fireEvent.change(searchInput, { target: { value: "test" } });

		// Assert
		expect(mockHandleSearchInputValue).toHaveBeenCalledWith("test");
	});

	it("calls close function when close button is clicked", () => {
		// Arrange
		const mockHandleSearchInputValue = jest.fn();
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();
		const searchValue = "initialValue";

		const { getByLabelText, getByText } = render(
			<Search
				handleSearchInputValue={mockHandleSearchInputValue}
				close={mockClose}
				closeOnEnter={mockCloseOnEnter}
				searchValue={searchValue}
			/>
		);

		// Act
		const closeButton = getByText("CLOSE");
		fireEvent.click(closeButton);

		// Assert
		expect(mockClose).toHaveBeenCalled();
	});

});
