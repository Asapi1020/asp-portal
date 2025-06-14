export interface PlayedGame {
	id: string;
	title: string;
	platform: string;
	thumbnailUrl: string;
	releaseDate: Date;
	playedAt: Date;
	description?: string;
}
