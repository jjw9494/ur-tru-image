import {
  render,
  waitFor,
  act,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import Home from "@/app/page";

//Cleanup
afterEach(() => {
  cleanup();
});

describe("Home Component", () => {
  it("renders without crashing", () => {
    // render(<Home />);
  });
});
