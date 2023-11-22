export interface feedProps {
	searchValue: string;
	filterValue: string;
}

export interface FilterProps {
	close: () => void;
	filterFunc: (value: string) => void;
}

export interface MenuProps {
	close: () => void;
	search: () => void;
}

export interface navProps {
	searchValue: string;
	filterValue: string;
	handleSearchInputValue: (value: string) => void;
	filterFunc: (value: string) => void;
}

export interface NavHeadProps {
	filter: () => void;
	menu: () => void;
}

export interface SearchProps {
	close: () => void;
	searchValue: string;
	handleSearchInputValue: (value: string) => void;
	closeOnEnter;
}

export interface TFeedObject {
	contentType: string;
	createdAt: string;
	dateAdded: string;
	eyebrowHeader: string;
	id: string;
	contentImage: string;

	imageDescription: string;
	linkTitle: string;
	linkUrl: string;
	mainTitle: string;
	publishedAt: string;
	subheading: string;
	updatedAt: string;
}
