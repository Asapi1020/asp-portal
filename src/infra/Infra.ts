import { NewsRepository } from "./NewsRepository";

export class Infra {
	public News: NewsRepository;

	constructor() {
		this.News = new NewsRepository();
	}
}
