import { render } from "@testing-library/react";
import ArtistsFeed from "../app/components/ArtistsFeed";

describe("ArtistsFeed", () => {
  it("renders without crashing", () => {
    render(<ArtistsFeed />);
  });
});
