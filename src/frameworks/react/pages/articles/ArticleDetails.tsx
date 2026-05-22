import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useAppContext } from "@this/frameworks/helpers";
import type { JSX } from "react";
import type { Components } from "react-markdown";
import { useParams } from "react-router-dom";
import { GridBackground } from "../../components/Background";
import { Markdown } from "../../components/Markdown";
import { theme } from "../../theme";

export const ArticleDetails = (): JSX.Element => {
	const { id } = useParams();
	const context = useAppContext();
	const usecase = context.usecases.article;
	const [article, content] = id ? [usecase.getByID(id), usecase.getContent(id)] : [undefined, ""];

	const articleTitle = article ? article.title : "記事が見つかりません";
	const articleSubTitle = article
		? `${article.createdAt.toLocaleDateString("ja-JP", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			})} - ${article.tags.join(", ")}`
		: "";

	const components: Components = {
		h2: ({ children }): JSX.Element => (
			<Typography variant="h5" gutterBottom sx={{ mt: 3.5, mb: 3.5 }}>
				{children}
			</Typography>
		),
		h3: ({ children }): JSX.Element => (
			<Typography variant="h6" gutterBottom>
				{children}
			</Typography>
		),
		p: ({ children }): JSX.Element => (
			<Typography variant="body1" sx={{ fontSize: "0.9rem", margin: 1 }}>
				{children}
			</Typography>
		),
	};

	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<GridBackground />
			<Card>
				{article?.imageUrl && (
					<CardMedia component="img" height="140" image={article.imageUrl} alt="article thumbnail" />
				)}

				<CardHeader title={articleTitle} subheader={articleSubTitle} sx={{ bgcolor: theme.palette.primary.dark }} />

				<CardContent>
					<Markdown content={content} components={components} />
				</CardContent>
			</Card>
		</Box>
	);
};
