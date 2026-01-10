import { StaticImageData } from "next/image";

export interface ExperienceItem {
	name: string;
	time: string;
	logo?: string | StaticImageData;
	isPresent: boolean;
	designation: string;
	description: string[];
}

export interface ProjectItem {
	name: string;
	description: string;
	tech: string[];
	github: string;
	url: string;
	time: string;
	bgImage: StaticImageData;
	image: StaticImageData;
}