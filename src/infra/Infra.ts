import { MarkdownRepository } from "./MarkdownRepository";

export class Infra {
	public markdown: MarkdownRepository;

	constructor() {
		this.markdown = new MarkdownRepository();
	}
}
