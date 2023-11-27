import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../app/about/page";

//Cleanup
afterEach(() => {
	cleanup();
});

//Window Width setter
const resizeWindow = (x: number) => {
	window.innerWidth = x;
	window.dispatchEvent(new Event("resize"));
};

describe("About", () => {
	it("renders without crashing", () => {
		render(<About />);
	});

	it("renders a h1 element with the text content About", () => {
		const { getByRole } = render(<About />);

		const heading = getByRole("heading", { name: /about./i, level: 1 });

		expect(heading).toBeInTheDocument();
	});

	it("renders a h2 element with the text content Lorem", () => {
		const { getByRole } = render(<About />);

		const aboutText = getByRole("heading", { name: /lorem/i, level: 2 });
		expect(aboutText).toBeInTheDocument();
	});

	it("renders Menu links.", async () => {
		render(<About />);

		const feed = screen.getByText("Feed");
		const artists = screen.getByText("Artists");
		const shop = screen.getByText("Shop");
		const about = screen.getByText("About");

		expect(feed).toBeInTheDocument();
		expect(artists).toBeInTheDocument();
		expect(shop).toBeInTheDocument();
		expect(about).toBeInTheDocument();
	});

	//Desktop tests
	it("renders a Closed Nav in the Artists page.", async () => {
		render(<About />);

		const closedNav = screen.getByTestId("nav-container");

		expect(closedNav).toBeInTheDocument();
	});

	it("renders a open Menu in the Artists page on desktop.", async () => {
		render(<About />);

		const openMenu = screen.getByTestId("menu-container");

		expect(openMenu).toBeInTheDocument();
	});

	//Mobile tests
	it("renders a open Menu in the Artists page on mobile.", async () => {
		resizeWindow(600);
		render(<About />);

		fireEvent.click(screen.getByText(/menu/i));

		const openMenu = screen.getByTestId("menu-container");

		expect(openMenu).toBeInTheDocument();
	});
});
