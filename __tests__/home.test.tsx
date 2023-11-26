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

//Cleanup
afterEach(() => {
	cleanup();
});

//Window Width setter
const resizeWindow = (x: number) => {
	window.innerWidth = x;
	window.dispatchEvent(new Event("resize"));
};

jest.mock("next/router", () => ({
	useRouter: () => ({
		pathname: "/",
	}),
}));

describe("Home Component", () => {
	it("renders without crashing", () => {
		render(<Home />);
	});

	it("renders a h1 element with the text content Home.", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /London Record Label & Occasional Function./i,
			level: 1,
		});

		expect(heading).toBeInTheDocument();
	});

	//Nav tests
	it("renders a Feed in the Home page.", async () => {
		render(<Home />);

		const feed = screen.getByTestId("feed-container");

		expect(feed).toBeInTheDocument();
	});

	//Desktop tests
	it("renders a Closed Nav in the Home page.", async () => {
		render(<Home />);

		const closedNav = screen.getByTestId("nav-container");

		expect(closedNav).toBeInTheDocument();
	});

	it("renders a open Menu in the Home page on desktop.", async () => {
		render(<Home />);

		const openMenu = screen.getByTestId("menu-container");

		expect(openMenu).toBeInTheDocument();
	});
	it("renders Menu links.", async () => {
		render(<Home />);

		const feed = screen.getByText("Feed");
		const artists = screen.getByText("Artists");
		const shop = screen.getByText("Shop");
		const about = screen.getByText("About");

		expect(feed).toBeInTheDocument();
		expect(artists).toBeInTheDocument();
		expect(shop).toBeInTheDocument();
		expect(about).toBeInTheDocument();
	});

	//Mobile tests

	it("renders a open Menu in the Home page on mobile.", async () => {
		resizeWindow(600);
		render(<Home />);

		fireEvent.click(screen.getByText(/menu/i));

		const openMenu = screen.getByTestId("menu-container");

		expect(openMenu).toBeInTheDocument();
	});
});
