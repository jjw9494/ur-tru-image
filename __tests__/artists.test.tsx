import { render, fireEvent } from "@testing-library/react";
import Artists from "../app/artists/page";

describe("Artists Component", () => {
	it("renders without crashing", () => {
		render(<Artists />);
	});
});
