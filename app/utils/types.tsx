export interface feedProps {
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
	filterValue: string;
	filterFunc: (value: string) => void;
}

export interface NavHeadProps {
	filter: () => void;
	menu: () => void;
}

export interface SearchProps {
	close: () => void;
	closeOnEnter: any;
}

export interface TFeedObject {
	contentType: string;
	createdAt: string;
	dateAdded: any;
	eyebrowHeader: string;
	id: string;
	contentImage: { url: string };
	imageDescription: string;
	linkTitle: string;
	linkUrl: string;
	mainTitle: string;
	publishedAt: string;
	subheading: string;
	updatedAt: string;
}

export interface TArtistsObjects {
	contentType: string;
	createdAt: string;
	dateAdded: any;
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
	bandcampUrl: string;
}
