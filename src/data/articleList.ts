import type { Article } from "@this/domain/articles";

export const articleList: Article[] = [
	{
		id: "kf2",
		title: "KF2というゲームが一人の男をどのように変えたか",
		tags: ["ゲーム", "KF2"],
		createdAt: new Date("2026-05-23"),
		imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/232090/header.jpg?t=1774538987",
	},
	{
		id: "sun-glasses",
		title: "サングラスは眩しいからかけるんだよ",
		tags: ["お気持ち", "皮肉"],
		createdAt: new Date("2026-06-16"),
	},
];
