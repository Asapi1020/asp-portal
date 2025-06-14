import { isString } from "@asp1020/type-utils";

export class MarkdownRepository {
	private contentMap: Record<string, unknown>;

	constructor() {
		this.contentMap = import.meta.glob("@this/content/**/*.md", { query: "?raw", eager: true });
	}

	public getNewsContent(id: string): string | null {
		return this.getContent(`news/${id}`);
	}

	public getContent(pathName: string): string | null {
		const content = this.contentMap[`/src/content/${pathName}.md`];

		if (!content) {
			return null;
		}

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
