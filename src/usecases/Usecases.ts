import { NewsUsecase } from "./NewsUsecase";
import type { Context } from "./helpers";

export class Usecases {
	public news: NewsUsecase;

	constructor(context: Context) {
		this.news = new NewsUsecase(context);
	}
}
