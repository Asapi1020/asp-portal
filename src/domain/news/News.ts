import type { Category } from "./Category";

export interface News {
	id: string;
	title: string;
	category: Category;
	createdAt: Date;
	updatedAt?: Date;
	isHidden?: boolean;
	imageUrl?: string;
}
