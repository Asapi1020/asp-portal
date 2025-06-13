import { Link as MuiLink, Typography, useTheme } from "@mui/material";
import type { JSX } from "react";
import ReactMarkdown, { type Components } from "react-markdown";

export interface MarkdownProps {
	content: string;
	components?: Components;
}

export const Markdown = ({ content, components }: MarkdownProps): JSX.Element => {
	const theme = useTheme();

	const defaultComponents: Components = {
		p: ({ children }) => (
			<Typography variant="body1" sx={{ marginBottom: 2 }}>
				{children}
			</Typography>
		),
		h1: ({ children }) => (
			<Typography variant="h4" gutterBottom>
				{children}
			</Typography>
		),
		h2: ({ children }) => (
			<Typography variant="h5" gutterBottom>
				{children}
			</Typography>
		),
		a: ({ href, children }) => (
			<MuiLink href={href} rel="noopener noreferrer">
				{children}
			</MuiLink>
		),
		ul: ({ children }) => (
			<Typography component="ul" sx={{ paddingLeft: 2 }}>
				{children}
			</Typography>
		),
		li: ({ children }) => (
			<Typography component="li" variant="body2">
				{children}
			</Typography>
		),
		code: ({ children }) => (
			<Typography
				component="code"
				sx={{
					fontFamily: theme.typography.fontFamily || "monospace",
					backgroundColor: theme.palette.action.hover,
					padding: "2px 4px",
					borderRadius: 1,
				}}
			>
				{children}
			</Typography>
		),
	};

	const mergedComponents = { ...defaultComponents, ...components };

	return <ReactMarkdown components={mergedComponents}>{content}</ReactMarkdown>;
};
