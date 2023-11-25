import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArtistsFeed from "../app/components/ArtistsFeed";
import { request } from "graphql-request";

jest.mock("graphql-request");

describe("ArtistsFeed", () => {
	it("ArtistsFeed renders without crashing", () => {
		render(<ArtistsFeed />);
	});

	it("ArtistsFeed renders Heading", () => {
		render(<ArtistsFeed />);

		const feedTitle = screen.getByRole("heading", {
			name: /artists./i,
			level: 1,
		});

		expect(feedTitle).toBeInTheDocument();
	});

	it("ArtistsFeed renders feed", () => {
		render(<ArtistsFeed />);

		const feed = screen.getByTestId("artists-feed-container");

		expect(feed).toBeInTheDocument();
	});

	// Tried to render mock API so we could check cards are being rendered in to the feed.

	// it("renders feed container after data is fetched", async () => {
	//   const mockData = {
	//     data: {
	//       tArtistsObjects: [
	//         {
	//           id: "1",
	//           /mainTitle: "Artist 1",
	//         },
	//       ],
	//     },
	//   };
	//   const fetchMock = jest.spyOn(window, "fetch").mockResolvedValueOnce({
	//     json: jest.fn().mockResolvedValueOnce(mockData),
	//     headers: new Headers({
	//       "Content-Type": "application/json",
	//     }),
	//     ok: true,
	//     redirected: false,
	//     status: 200,
	//     statusText: "OK",
	//   } as unknown as Response);

	//   render(<ArtistsFeed />);
	//   await waitFor(() => {
	//     const feedContainer = screen.getByTestId("feed-container");
	//     expect(feedContainer).toBeInTheDocument();

	//     const { getByText } = within(feedContainer);
	//     expect(getByText(/artist 1/i)).toBeInTheDocument();
	//   });

	//   fetchMock.mockRestore();
	// });

	// Mock Fetch
	it("calls request function on mount", async () => {
		const mockRequest = request as jest.MockedFunction<typeof request>;
		mockRequest.mockResolvedValueOnce({ tArtistsObjects: [] });

		render(<ArtistsFeed />);

		await waitFor(() => {
			expect(mockRequest).toHaveBeenCalledWith(
				"https://api-eu-west-2.hygraph.com/v2/clolirkf98got01t7dvsr8g2j/master",
				expect.any(String)
			);
		});
	});
});
