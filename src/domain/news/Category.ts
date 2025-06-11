export const Category = {
	GENERAL: "全般",
	GAME: "ゲーム",
	PROGRAMMING: "プログラミング",
	MOUNTAIN: "登山",
	MUSIC: "音楽",
	STUDY: "勉強",
} as const;

export type Category = (typeof Category)[keyof typeof Category];
