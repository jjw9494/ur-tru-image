import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Search from "@/app/components/Search";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";
import { useRouter } from "next/navigation";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

//Cleanup
afterEach(() => {
	cleanup();
});

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

describe("Search Component", () => {
	it("renders without crashing and mock functions", () => {
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();
		mockRouter.push("/");

		render(<Search close={mockClose} closeOnEnter={mockCloseOnEnter} />);

		const searchContainer = screen.getByTestId("search-container");

		expect(searchContainer).toBeInTheDocument();
	});

	it("calls close function when close button is clicked", () => {
		const mockClose = jest.fn();
		const mockCloseOnEnter = jest.fn();
		mockRouter.push("/");

		const { getByText } = render(
			<Search close={mockClose} closeOnEnter={mockCloseOnEnter} />
		);

		const closeButton = getByText("CLOSE");
		fireEvent.click(closeButton);

		expect(mockClose).toHaveBeenCalled();
	});
});
