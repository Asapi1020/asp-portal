import { ThemeProvider } from "@mui/material/styles";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import type { Context } from "./helpers";
import { App, theme } from "./react";

export function run(context: Context): void {
	const rootElement = document.getElementById("root");

	if (!rootElement) {
		throw new Error("root element not found");
	}

	const AppContext = createContext<Context>(context);

	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<AppContext.Provider value={context}>
					<App />
				</AppContext.Provider>
			</ThemeProvider>
		</React.StrictMode>,
	);
}
