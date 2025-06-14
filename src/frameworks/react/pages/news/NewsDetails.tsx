import { Box, Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { useAppContext } from "@this/frameworks/helpers";
import type { JSX } from "react";
import { useParams } from "react-router-dom";
import { Markdown } from "../../components/Markdown";
import { theme } from "../../theme";

export const NewsDetails = (): JSX.Element => {
	const { id } = useParams();
	const context = useAppContext();
	const usecase = context.usecases.news;
	const [news, content] = id ? [usecase.getNewsById(id), usecase.getNewsContent(id)] : [undefined, ""];

	const newsTitle = news ? news.title : "ニュースが見つかりません";
	const newsSubTitle = news
		? `${news.createdAt.toLocaleDateString("ja-JP", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			})} - ${news.category}`
		: "";

	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<Card sx={{ width: 800 }}>
				{news?.imageUrl && <CardMedia component="img" height="140" image={news.imageUrl} alt="news thumbnail" />}

				<CardHeader title={newsTitle} subheader={newsSubTitle} sx={{ bgcolor: theme.palette.secondary.dark }} />

				<CardContent>
					<Markdown content={content} />
				</CardContent>
			</Card>
		</Box>
	);
};
