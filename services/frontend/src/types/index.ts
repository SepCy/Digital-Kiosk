export interface Service {
	id: string;
	name: string;
	description: string;
	icon: string;
	contents: ServiceContent[];
}

export interface ServiceContent {
	id: string;
	title: string;
	description: string;
	requirements?: string[];
	steps?: string[];
}
