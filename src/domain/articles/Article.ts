export interface Article {
	id: string;
	title: string;
	tags: string[];
	series?: string;
	createdAt: Date;
	updatedAt?: Date;
	isHidden?: boolean;
	imageUrl?: string;
}
