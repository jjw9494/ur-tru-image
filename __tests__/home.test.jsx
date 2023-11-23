// import { render, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Home from "../app/page";
// import { useRouter } from "next/router";

// jest.mock("next/router", () => ({
//   useRouter: () => ({
//     pathname: "/",
//     query: {},
//     asPath: "/",
//   }),
// }));

// jest.mock("next/dynamic", () => () => {
//   const DynamicComponent = () => <div>Dynamic Component</div>;
//   return DynamicComponent;
// });

// describe("Home", () => {
//   it("renders without crashing", () => {
//     render(<Home />);
//   });

//   it("loads DynamicNavController and DynamicFeed", async () => {
//     const { getByText } = render(<Home />);

//     await waitFor(() => {
//       expect(getByText("Dynamic Component")).toBeInTheDocument();
//     });
//   });
// });
