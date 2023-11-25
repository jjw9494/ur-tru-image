import Feed from "@/app/components/Feed";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { request } from "graphql-request";

jest.mock("graphql-request");

describe("Feed", () => {
  it("renders without crashing", () => {
    render(<Feed filterValue="" />);
  });

  // Render Tests
  it("Feed renders Heading", () => {
    render(<Feed filterValue="" />);

    const feedTitle = screen.getByRole("heading", {
      name: "London Record Label & Occasional Function.",
      level: 1,
    });

    expect(feedTitle).toBeInTheDocument();
  });

  it("Feed renders Empty Feed", () => {
    render(<Feed  filterValue="" />);

    const feedTitle = screen.getByRole("heading", {
      name: "Nothing to Display",
      level: 2,
    });

    expect(feedTitle).toBeInTheDocument();
  })

  // Mock Fetch
  it("calls request function on mount", async () => {
    const mockRequest = request as jest.MockedFunction<typeof request>;
    mockRequest.mockResolvedValueOnce({ tFeedObjects: [] });

    render(<Feed  filterValue="" />);

    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalledWith(
        "https://api-eu-west-2.hygraph.com/v2/clolirkf98got01t7dvsr8g2j/master",
        expect.any(String)
      );
    });
  });
});
