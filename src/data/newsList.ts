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
	{
		id: "002-game",
		title: "ゲームページv1.1.0を公開しました",
		category: Category.GAME,
		createdAt: new Date("2026-03-27"),
		imageUrl: "https://i.imgur.com/GI7cZBC.jpeg",
	},
	{
		id: "003-programming",
		title: "プログラミングページv1.0.0を公開しました",
		category: Category.PROGRAMMING,
		createdAt: new Date("2026-04-04"),
		imageUrl: "https://i.imgur.com/1ppHBfH.png",
	},
	{
		id: "004-article",
		title: "記事「KF2というゲームが一人の男をどのように変えたか」を公開しました",
		category: Category.ARTICLE,
		createdAt: new Date("2026-05-23"),
		imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/232090/header.jpg?t=1774538987",
	},
	{
		id: "005-article",
		title: "記事「サングラスは眩しいからかけるんだよ」を公開しました",
		category: Category.ARTICLE,
		createdAt: new Date("2026-06-16"),
		directLink: "/articles/sun-glasses",
	},
];
