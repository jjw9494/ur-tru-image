import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Search from "@/app/components/Search";
import "@testing-library/jest-dom";

// Mock next/router module
jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

describe("Search Component", () => {
	it("renders without crashing and mock functions", async () => {
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();

		// Mock the useRouter implementation
		const useRouterMock = jest.requireMock("next/router").useRouter;
		useRouterMock.mockImplementation(() => ({
			pathname: "/",
			query: {},
			push: jest.fn(),
		}));

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

		// Mock the useRouter implementation
		const useRouterMock = jest.requireMock("next/router").useRouter;
		useRouterMock.mockImplementation(() => ({
			pathname: "/",
			query: {},
			push: jest.fn(),
		}));

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
