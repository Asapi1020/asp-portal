import { articleList } from "@this/data/articleList";
import type { Article } from "@this/domain/articles";
import type { MarkdownRepository } from "@this/infra/MarkdownRepository";
import type { Context } from "./helpers";

export class ArticleUsecase {
	private context: Context;

	constructor(context: Context) {
		this.context = context;
	}

	private get markdown(): MarkdownRepository {
		return this.context.infra.markdown;
	}

	public getByID(id: string): Article | undefined {
		const articleItem = articleList.find((article) => article.id === id);
		return articleItem;
	}

	public getList(offset: number, limit: number): [Article[], number] {
		const sortedArticles = articleList.sort(
			(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
		);
		const paginatedArticles = sortedArticles.slice(offset, offset + limit);
		return [paginatedArticles, articleList.length];
	}

	public getContent(id: string): string {
		const content = this.markdown.getArticleContent(id) || "Article content not found.";
		return content;
	}
}
