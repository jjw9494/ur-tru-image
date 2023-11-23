// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/ArtistsFeed.test.tsx
import { render } from "@testing-library/react";
import ArtistsFeed from "../app/components/ArtistsFeed";

describe("ArtistsFeed", () => {
  it("renders without crashing", () => {
    render(<ArtistsFeed />);
  });
});
