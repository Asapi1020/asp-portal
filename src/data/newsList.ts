import { Category, type News } from "@this/domain";

export const newsList: News[] = [
	{
		id: "000-news",
		title: "ニュース機能を実装しました",
		category: Category.GENERAL,
		createdAt: new Date("2025-06-11"),
	},
];
