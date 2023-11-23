import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NavController from "@/app/components/NavController";

jest.mock("next/navigation", () => ({
	usePathname: jest.fn(() => "/mocked-pathname"),
}));

describe("NavController Component", () => {
	it("renders without crashing", () => {
		render(
			<NavController
				filterFunc={() => {}}
				filterValue={""}
				searchValue=""
				handleSearchInputValue={() => {}}
			/>
		);
		// Add assertions based on your implementation
	});
});
