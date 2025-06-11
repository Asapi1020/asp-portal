import { newsList } from "@this/data/newsList";
import type { News } from "@this/domain";
import type { NewsRepository } from "@this/infra/NewsRepository";
import type { Context } from "./helpers";

export class NewsUsecase {
	private context: Context;

	constructor(context: Context) {
		this.context = context;
	}

	private get news(): NewsRepository {
		return this.context.infra.News;
	}

	public getNewsById(id: string): News | undefined {
		const newsItem = newsList.find((news) => news.id === id);
		return newsItem;
	}

	public getNewsList(offset: number, limit: number): [News[], number] {
		const sortedNews = newsList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
		const paginatedNews = sortedNews.slice(offset, offset + limit);
		return [paginatedNews, newsList.length];
	}

	public getNewsContent(id: string): string {
		const content = this.news.getNewsContent(id) || "News content not found.";
		return content;
	}
}
