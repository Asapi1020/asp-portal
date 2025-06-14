import { newsList } from "@this/data/newsList";
import type { News } from "@this/domain";
import type { MarkdownRepository } from "@this/infra/MarkdownRepository";
import type { Context } from "./helpers";

export class NewsUsecase {
	private context: Context;

	constructor(context: Context) {
		this.context = context;
	}

	private get markdown(): MarkdownRepository {
		return this.context.infra.markdown;
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
		const content = this.markdown.getNewsContent(id) || "News content not found.";
		return content;
	}
}
