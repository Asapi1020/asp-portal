import type { Domain } from "@this/domain";
import type { Infra } from "@this/infra";

export interface Context {
	domain: Domain;
	infra: Infra;
}
