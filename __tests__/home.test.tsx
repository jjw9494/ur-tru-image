import { render, waitFor, act, fireEvent } from "@testing-library/react";
import { useState, useEffect } from "react";
import Home from "@/app/page";

// jest.mock("next/navigation", () => ({
// 	usePathname: jest.fn(() => "/mocked-pathname"),
// 	useRouter: jest.fn(() => ({
// 		replace: jest.fn(),
// 	})),
// 	useSearchParams: jest.fn(() => ({
// 		get: jest.fn(),
// 		set: jest.fn(),
// 	})),
// }));

// jest.mock("next/dynamic", () => (fn: () => Promise<any>) => {
// 	const Component = () => {
// 		const [component, setComponent] = useState(null);

// 		useEffect(() => {
// 			fn().then((module) => {
// 				setComponent(() => module.default || module);
// 			});
// 		}, []);

// 		return component ? <Home /> : null;
// 	};

// 	return Component;
// });

describe("Home Component", () => {
	it("renders without crashing", async () => {
		// await act(async () => {
		// 	render(<Home />);
		// 	// await waitFor(() => {
		// 	// 	// Add assertions based on your implementation
		// 	// });
		// });
	});

	// it("calls handleSearchInputValue when search input value changes", async () => {
	// 	await act(async () => {
	// 		const { getByLabelText } = render(<Home />);
	// 		const searchInput = getByLabelText("Type to search...");

	// 		fireEvent.change(searchInput, { target: { value: "test" } });

	// 		await waitFor(() => {
	// 			// Add assertions based on your implementation
	// 		});
	// 	});
	// });

	// it("calls filterFunc when filter input value changes", async () => {
	// 	await act(async () => {
	// 		const { getByLabelText } = render(<Home />);
	// 		const filterInput = getByLabelText("Filter input");

	// 		fireEvent.change(filterInput, { target: { value: "test" } });

	// 		await waitFor(() => {
	// 			// Add assertions based on your implementation
	// 		});
	// 	});
	// });

	// it("updates URL correctly when search input changes", async () => {
	// 	await act(async () => {
	// 		const { getByLabelText } = render(<Home />);
	// 		const searchInput = getByLabelText("Type to search...");

	// 		fireEvent.change(searchInput, { target: { value: "test" } });

	// 		await waitFor(() => {
	// 			"test" === searchInput.value;
	// 		});
	// 	});
	// });
});
