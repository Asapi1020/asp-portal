import { Box, Typography } from "@mui/material";
import { useAppContext } from "@this/frameworks/helpers";
import type { JSX } from "react";
import type { Components } from "react-markdown";
import { Markdown } from "../components/Markdown";

export const About = (): JSX.Element => {
	const context = useAppContext();
	const content = context.infra.markdown.getContent("about") || "このページはまだ準備中です。";

	const components: Components = {
		h1: ({ children }): JSX.Element => (
			<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
				<Typography variant="h4" color="primary" gutterBottom sx={{ mt: 6, mb: 6 }}>
					{children}
				</Typography>
			</Box>
		),
		h2: ({ children }): JSX.Element => (
			<Typography variant="h5" color="secondary" gutterBottom sx={{ mt: 5, mb: 5 }}>
				{children}
			</Typography>
		),
		h3: ({ children }): JSX.Element => (
			<Typography variant="h6" gutterBottom sx={{ mt: 4, mb: 4 }}>
				{children}
			</Typography>
		),
		p: ({ children }): JSX.Element => (
			<Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
				{children}
			</Typography>
		),
	};

	return <Markdown content={content} components={components} />;
};
