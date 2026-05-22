import { ArticleUsecase } from "./ArticleUsecase";
import { NewsUsecase } from "./NewsUsecase";
import type { Context } from "./helpers";

export class Usecases {
	public news: NewsUsecase;
	public article: ArticleUsecase;

	constructor(context: Context) {
		this.news = new NewsUsecase(context);
		this.article = new ArticleUsecase(context);
	}
}
