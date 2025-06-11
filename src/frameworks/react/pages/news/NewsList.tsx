import { toNumber } from "@asp1020/type-utils";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Pagination, Typography } from "@mui/material";
import { useAppContext } from "@this/frameworks/helpers";
import type { JSX } from "react";
import { Link as RouterLink, useSearchParams } from "react-router-dom";

const PAGE_SIZE = 12;

export const NewsList = (): JSX.Element => {
	const [searchParams] = useSearchParams();
	const page = toNumber(searchParams.get("page")) ?? 1;

	const context = useAppContext();
	const [newsList, total] = context.usecases.news.getNewsList((page - 1) * PAGE_SIZE, PAGE_SIZE);

	function handleChange(_event: React.ChangeEvent<unknown>, value: number): void {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", value.toString());
		window.location.href = `/news?${params.toString()}`;
	}

	return (
		<>
			<Typography mt={4} variant="h4" align="center" gutterBottom>
				ニュース
			</Typography>

			<Grid mt={4} container spacing={2} columns={16}>
				{newsList.map((news) => (
					<Grid size={{ xs: 2, sm: 4, md: 4 }} key={news.id}>
						<CardActionArea component={RouterLink} to={`/news/${news.id}`}>
							<Card sx={{ height: "100%", borderColor: "grey.500", borderWidth: 1, borderStyle: "solid" }}>
								{news.imageUrl ? (
									<CardMedia component="img" height="140" image={news.imageUrl} alt="news thumbnail" />
								) : (
									<Box sx={{ height: 140, backgroundColor: "grey.700" }}>
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{ textAlign: "center", paddingTop: 4, height: "100%", verticalAlign: "middle" }}
										>
											No Image
										</Typography>
									</Box>
								)}
								<CardContent>
									<Typography variant="body2" color="text.secondary" gutterBottom>
										{news.createdAt.toLocaleDateString("ja-JP", {
											year: "numeric",
											month: "2-digit",
											day: "2-digit",
										})}{" "}
										- {news.category}
									</Typography>
									<Typography variant="h6">{news.title}</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				))}
			</Grid>

			<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
				<Pagination count={Math.ceil(total / 12)} page={page} onChange={handleChange} />
			</Box>
		</>
	);
};
