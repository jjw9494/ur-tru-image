import {
	render,
	fireEvent,
	screen,
	waitFor,
	cleanup,
} from "@testing-library/react";
import Search from "@/app/components/Search";
import "@testing-library/jest-dom";

//Cleanup
beforeEach(() => {
	cleanup();
});

jest.mock("next/navigation");

describe("Search Component", () => {
	it("renders without crashing and mock functions", async () => {
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();

		render(<Search close={mockClose} closeOnEnter={mockCloseOnEnter} />);

		const searchContainer = screen.getByTestId("search-container");

		// Wait for asynchronous operations to complete
		await waitFor(() => {
			expect(searchContainer).toBeInTheDocument();
		});
	});

	it("calls close function when close button is clicked", async () => {
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();

		const { getByText } = render(
			<Search close={mockClose} closeOnEnter={mockCloseOnEnter} />
		);

		const closeButton = getByText("CLOSE");
		fireEvent.click(closeButton);

		// Wait for asynchronous operations to complete
		await waitFor(() => {
			expect(mockClose).toHaveBeenCalled();
		});
	});
});
