import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppContext, type Context } from "./helpers";
import { App, theme } from "./react";

export function run(context: Context): void {
	const rootElement = document.getElementById("root");

	if (!rootElement) {
		throw new Error("root element not found");
	}

	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<AppContext.Provider value={context}>
						<App />
					</AppContext.Provider>
				</BrowserRouter>
			</ThemeProvider>
		</React.StrictMode>,
	);
}
