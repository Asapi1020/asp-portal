import { Category, type News } from "@this/domain";

export const newsList: News[] = [
	{
		id: "000-news",
		title: "ニュース機能を実装しました",
		category: Category.GENERAL,
		createdAt: new Date("2025-06-11"),
	},
	{
		id: "001-game",
		title: "ゲームページv1.0.0を公開しました",
		category: Category.GAME,
		createdAt: new Date("2025-06-14"),
		imageUrl: "https://i.imgur.com/GI7cZBC.jpeg",
	},
];
