import Feed from "@/app/components/Feed";
import { render, waitFor } from "@testing-library/react";
import { request } from "graphql-request";

jest.mock("graphql-request");

describe("Feed", () => {
  it("renders without crashing", () => {
    render(<Feed searchValue="" filterValue="" />);
  });

  it("calls request function on mount", async () => {
    const mockRequest = request as jest.MockedFunction<typeof request>;
    mockRequest.mockResolvedValueOnce({ tFeedObjects: [] });

    render(<Feed searchValue="" filterValue="" />);

    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalledWith(
        "https://api-eu-west-2.hygraph.com/v2/clolirkf98got01t7dvsr8g2j/master",
        expect.any(String)
      );
    });
  });
});
