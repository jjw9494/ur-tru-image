// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/Menu.test.tsx
import { render, fireEvent } from "@testing-library/react";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
	useRouter: () => ({
		pathname: "/",
	}),
}));

describe("Menu", () => {
	it("renders without crashing", () => {
		const mockSearchFunc = jest.fn();

		render(<Menu close={close} search={mockSearchFunc} />);
	});
});
