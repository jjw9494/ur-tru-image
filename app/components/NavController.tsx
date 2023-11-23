"use-client";
import { useState, useEffect } from "react";
import NavHead from "./NavHead";
import Filter from "./Filter";
import Menu from "./Menu";
import Search from "./Search";
import { navProps } from "../utils/types";
import { usePathname } from "next/navigation";

const NavController: React.FC<navProps> = (props: navProps) => {
	const [navState, setNavState] = useState("closed");
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Returns window width to toggle navigation depending on screen size
	useEffect(() => {
		window.addEventListener("resize", function () {
			setWindowWidth(window.innerWidth);
		});

		return window.removeEventListener("resize", function () {
			setWindowWidth(window.innerWidth);
		});
	}, []);

	const pathname = usePathname();

	// Opens Menu Dropdown on smaller screens
	const handleMenuButtonClick = () => {
		setNavState("menu");
	};

	// Opens Filter Dropdown on smaller screens
	const handleFilterButtonClick = () => {
		setNavState("filter");
	};

	// Close Dropdown on smaller screens and Search on larger screen
	const handleCloseButtonClick = () => {
		setNavState("closed");
	};

	// Opens search window
	const handleSearchButtonClick = () => {
		setNavState("search");
	};

	// Closes search window on enter press
	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
			setNavState("closed");
		}
	};

	// Runs handleKeyDown when key is pressed
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	function setNav(navState: string) {
		// Toggles display for Desktop width
		if (windowWidth > 720) {
			return (
				<>
					<NavHead
						menu={handleMenuButtonClick}
						filter={handleFilterButtonClick}
					/>
					<Menu
						close={handleCloseButtonClick}
						search={handleSearchButtonClick}
					/>
					{pathname === "/" && (
						<Filter
							close={handleCloseButtonClick}
							filterFunc={props.filterFunc}
						/>
					)}
					{navState === "search" ? (
						<Search
							searchValue={props.searchValue}
							handleSearchInputValue={props.handleSearchInputValue}
							close={handleCloseButtonClick}
							closeOnEnter={handleKeyDown}
						/>
					) : (
						""
					)}
				</>
			);
		} else {
			// Toggle display for smaller screen width
			if (navState === "closed") {
				return (
					<>
						<NavHead
							menu={handleMenuButtonClick}
							filter={handleFilterButtonClick}
						/>
					</>
				);
			} else if (navState === "menu") {
				return (
					<>
						<NavHead
							menu={handleMenuButtonClick}
							filter={handleFilterButtonClick}
						/>
						<Menu
							close={handleCloseButtonClick}
							search={handleSearchButtonClick}
						/>
					</>
				);
			} else if (navState === "filter") {
				return (
					<>
						<NavHead
							menu={handleMenuButtonClick}
							filter={handleFilterButtonClick}
						/>

						<Filter
							close={handleCloseButtonClick}
							filterFunc={props.filterFunc}
						/>
					</>
				);
			} else if (navState === "search") {
				return (
					<Search
						closeOnEnter={handleKeyDown}
						searchValue={props.searchValue}
						handleSearchInputValue={props.handleSearchInputValue}
						close={handleCloseButtonClick}
					/>
				);
			}
		}
	}

	//
	return <>{setNav(navState)}</>;
};

export default NavController;
