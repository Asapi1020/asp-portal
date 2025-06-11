import { Link as MuiLink, Typography, useTheme } from "@mui/material";
import type { JSX } from "react";
import ReactMarkdown from "react-markdown";

export const Markdown = ({ content }: { content: string }): JSX.Element => {
	const theme = useTheme();

	return (
		<ReactMarkdown
			components={{
				p: ({ children }): JSX.Element => (
					<Typography variant="body1" sx={{ marginBottom: 2 }}>
						{children}
					</Typography>
				),
				h1: ({ children }): JSX.Element => (
					<Typography variant="h4" gutterBottom>
						{children}
					</Typography>
				),
				h2: ({ children }): JSX.Element => (
					<Typography variant="h5" gutterBottom>
						{children}
					</Typography>
				),
				a: ({ href, children }): JSX.Element => (
					<MuiLink href={href} rel="noopener noreferrer">
						{children}
					</MuiLink>
				),
				ul: ({ children }): JSX.Element => (
					<Typography component="ul" sx={{ paddingLeft: 2 }}>
						{children}
					</Typography>
				),
				li: ({ children }): JSX.Element => (
					<Typography component="li" variant="body2">
						{children}
					</Typography>
				),
				code: ({ children }): JSX.Element => (
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
			}}
		>
			{content}
		</ReactMarkdown>
	);
};
