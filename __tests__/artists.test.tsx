// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/Artists.test.tsx
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Artists from "../app/Artists/pages.tsx";
import { request } from "graphql-request";

jest.mock("graphql-request");

describe("Artists", () => {
  it("renders without crashing", () => {
    render(<Artists />);
  });

  it("calls request function on mount", async () => {
    const mockRequest = request as jest.MockedFunction<typeof request>;
    mockRequest.mockResolvedValueOnce({ tFeedObjects: [] });

    render(<Artists />);

    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalledWith(
        "https://api-eu-west-2.hygraph.com/v2/clolirkf98got01t7dvsr8g2j/master",
        expect.any(String)
      );
    });
  });
});
