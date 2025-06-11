import type { Domain } from "@this/domain";
import type { Infra } from "@this/infra";
import type { Usecases } from "@this/usecases";
import { createContext, useContext } from "react";

export interface Context {
	domain: Domain;
	infra: Infra;
	usecases: Usecases;
}

export const AppContext = createContext<Context | undefined>(undefined);

export function useAppContext(): Context {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("AppContext is not provided");
	}

	return context;
}
