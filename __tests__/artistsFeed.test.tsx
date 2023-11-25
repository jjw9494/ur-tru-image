import { render, screen, waitFor } from "@testing-library/react";
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
