"use client";
import TextField from "@mui/material/TextField";
import "../styles/search.css";
import { SearchProps } from "../utils/types";
import Link from "next/link";

const Search: React.FC<SearchProps> = ({
	handleSearchInputValue,
	close,
	searchValue,
	closeOnEnter,
}) => {
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
					value={searchValue}
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
