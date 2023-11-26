"use client";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import "../styles/search.css";
import { SearchProps } from "../utils/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search: React.FC<SearchProps> = ({ close, closeOnEnter }) => {
	const pathname = usePathname()!;
	const searchParams = useSearchParams()!;
	const router = useRouter()!;

	const createQueryString = React.useCallback(
		(value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set("q", value ?? "");

			return params.toString();
		},
		[searchParams]
	);

	function handleSearchInputValue(input: string) {
		const queryString = createQueryString(input);
		return router.replace(pathname + "?" + queryString, {
			scroll: false,
			shallow: false,
		});
	}

	// Return search input value and push up to parent
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		handleSearchInputValue(value);
	};

	return (
		<div className="search-container" data-testid="search-container">
			<div className="search-close-button-container">
				<label htmlFor="close-search-button">
					<button type="button" id="close-search-button" onClick={close}>
						CLOSE
					</button>
				</label>

				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="white"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="0.5"
						y="0.5"
						width="11"
						height="11"
						rx="5.5"
						stroke="white"
					/>
				</svg>
			</div>
			<div className="search-input-container">
				{/* TextField input from MUI */}
				<TextField
					onChange={handleChange}
					onKeyDown={closeOnEnter}
					className="search-styles"
					id="search-input"
					label="Type to search..."
					variant="standard"
					placeholder="search"
					autoFocus
				/>
			</div>
		</div>
	);
};   

export default Search;
