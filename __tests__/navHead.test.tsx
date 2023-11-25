// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/NavHead.test.tsx
import { render, fireEvent, screen } from "@testing-library/react";
import NavHead from "../app/components/NavHead";
import "@testing-library/jest-dom";

describe("NavHead", () => {
	it("renders without crashing and mock functions", () => {
		const mockFilterFunc = jest.fn();
		const mockMenuFunc = jest.fn();

		render(<NavHead filter={mockFilterFunc} menu={mockMenuFunc} />);
	});

	it("renders Nav Container", () => {
		const mockFilterFunc = jest.fn();
		const mockMenuFunc = jest.fn();

		render(<NavHead filter={mockFilterFunc} menu={mockMenuFunc} />);

		const menuContainer = screen.getByTestId("nav-container");

		expect(menuContainer).toBeInTheDocument();
	});

	it("renders Nav Menu button", () => {
		const mockFilterFunc = jest.fn();
		const mockMenuFunc = jest.fn();

		render(<NavHead filter={mockFilterFunc} menu={mockMenuFunc} />);

		const menuButton = screen.getByText("MENU");

		expect(menuButton).toBeInTheDocument();
	});
});
