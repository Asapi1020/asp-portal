import { isString } from "@asp1020/type-utils";

export class NewsRepository {
	private newsContentMap: Record<string, unknown>;

	constructor() {
		this.newsContentMap = import.meta.glob("@this/content/news/*.md", { query: "?raw", eager: true });
	}

	public getNewsContent(id: string): string | null {
		const content = this.newsContentMap[`/src/content/news/${id}.md`];

		if (isString(content)) {
			return content;
		}

		const defaultContent = (content as Record<string, unknown>).default;

		if (isString(defaultContent)) {
			return defaultContent;
		}

		return null;
	}
}
