import { render, fireEvent } from "@testing-library/react";
import About from "../app/about/page";

describe("About", () => {
	it("renders without crashing", () => {
		render(<About />);
	});
});
