"use client";
import { useState, useEffect } from "react";
import "../styles/Feed.css";
import Masonry from "react-masonry-css";
import { TArtistsObjects } from "../utils/types";
import { request } from "graphql-request";

// searchValue and filterValue are the values returned from the search and filter functions
const ArtistsFeed = () => {
	const [db, setDb] = useState<TArtistsObjects[]>([]);

	// Fetch data from GraphQL server
	useEffect(() => {
		const fetchFeed = async () => {
			try {
				const response: { tArtistsObjects: TArtistsObjects[] } = await request(
					"https://api-eu-west-2.hygraph.com/v2/clolirkf98got01t7dvsr8g2j/master",
					`
					query MyQuery {
						tArtistsObjects {
						  id
						  imageDescription
						  linkTitle
						  linkUrl
						  mainTitle
						  subheading
						  bandcampUrl
						}
					  } 
			`
				);
				const TFeedObjects = response.tArtistsObjects;
				setDb(TFeedObjects);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchFeed();
	}, []);

	//Set Breakpoints for displaying full-menu items on tablet/desktop
	const breakpoints = {
		default: 2,
		720: 1,
	};

	// Produces filtered and mapped array to return
	const renderFeed = db
		.sort((a, b) => a.mainTitle.localeCompare(b.mainTitle))
		// Map out Array into HTML format
		.map((e) => (
			<div key={e.id} className="card" data-testid="card">
				<a href={e.bandcampUrl} target="_blank">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={e.linkUrl} alt={e.imageDescription} />
				</a>
				{e.linkTitle ? (
					<span className="card-link">
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M22 0H11H0V11V22H11H22V11V0ZM7.92 14.96L15.84 11L7.92 7.04V14.96Z"
								fill="#111111"
							/>
						</svg>
						<a href="{e.bandcampUrl}">{e.linkTitle}</a>
					</span>
				) : (
					""
				)}
				<h2>{e.mainTitle}</h2>
				{e.subheading ? <h3>{e.subheading}</h3> : ""}
			</div>
		));

	//Renders filtered feed to the DOM, using Masonry layout plugin
	return (
		<>
			<div className="home__title-div">
				<h1 className="home__title">ARTISTS.</h1>
			</div>

			<div className="feed-container" data-testid="artists-feed-container">
				<Masonry
					breakpointCols={breakpoints}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{renderFeed}
				</Masonry>
			</div>
		</>
	);
};

export default ArtistsFeed;
