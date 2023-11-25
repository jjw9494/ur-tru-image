import {
	render,
	waitFor,
	act,
	fireEvent,
	cleanup,
	screen,
} from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

//Cleanup
afterEach(() => {
	cleanup();
});

describe("Home Component", () => {
	it("renders without crashing", () => {
		render(<Home />);
	});
});
