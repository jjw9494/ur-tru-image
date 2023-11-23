// FILEPATH: /C:/Users/thoma/Documents/sideProjects/tt-next/tt-site/app/NavHead.test.tsx
import { render, fireEvent } from "@testing-library/react";
import NavHead from "../app/components/NavHead";

describe("NavHead", () => {
	it("renders without crashing", () => {
		const mockSearchFunc = jest.fn();

		render(<NavHead search={mockSearchFunc} />);
	});

	});

