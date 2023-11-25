import {
	render,
	act,
	screen,
	cleanup,
	fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Artists from "../app/artists/page";

//Cleanup
afterEach(() => {
	cleanup();
});

//Window Width setter
const resizeWindow = (x: number) => {
	window.innerWidth = x;
	window.dispatchEvent(new Event("resize"));
};

describe("Artists Component", () => {
	it("renders without crashing", () => {
		render(<Artists />);
	});

	it("renders a h1 element with the text content Artists.", () => {
		render(<Artists />);

		const heading = screen.getByRole("heading", {
			name: /artists./i,
			level: 1,
		});

		expect(heading).toBeInTheDocument();
	});

	//Nav tests
	it("renders a Feed in the Artists page.", async () => {
		render(<Artists />);

		const feed = screen.getByTestId("artists-feed-container");

		expect(feed).toBeInTheDocument();
	});

	//Desktop tests
	it("renders a Closed Nav in the Artists page.", async () => {
		render(<Artists />);

		const closedNav = screen.getByTestId("nav-container");

		expect(closedNav).toBeInTheDocument();
	});

	it("renders a open Menu in the Artists page on desktop.", async () => {
		render(<Artists />);

		const openMenu = screen.getByTestId("menu-container");

		expect(openMenu).toBeInTheDocument();
	});

	//Mobile tests

	it("renders a open Menu in the Artists page on mobile.", async () => {
		resizeWindow(600);
		render(<Artists />);

		fireEvent.click(screen.getByText(/menu/i));

		const openMenu = screen.getByTestId("menu-container");

		expect(openMenu).toBeInTheDocument();
	});
});
