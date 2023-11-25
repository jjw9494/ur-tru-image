import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Search from "@/app/components/Search";
import "@testing-library/jest-dom";

//Cleanup
afterEach(() => {
  cleanup();
});

describe("Search Component", () => {
  it("renders without crashing and mock functions", () => {
 
    const mockClose = jest.fn();
    const mockCloseOnEnter = jest.fn();
   

    render(
      <Search
      
        close={mockClose}
        closeOnEnter={mockCloseOnEnter}
     
      />
    );

    const searchContainer = screen.getByTestId("search-container");

    expect(searchContainer).toBeInTheDocument();
  });



  it("calls close function when close button is clicked", () => {
   
    const mockClose = jest.fn();
    const mockCloseOnEnter = jest.fn();
    

    const { getByText } = render(
      <Search
        
        close={mockClose}
        closeOnEnter={mockCloseOnEnter}
      
      />
    );

    const closeButton = getByText("CLOSE");
    fireEvent.click(closeButton);

    expect(mockClose).toHaveBeenCalled();
  });
});
