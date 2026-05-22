import { toNumber } from "@asp1020/type-utils";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Pagination, Typography } from "@mui/material";
import { useAppContext } from "@this/frameworks/helpers";
import type { JSX } from "react";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import { GridBackground } from "../../components/Background";

const PAGE_SIZE = 12;

export const ArticleList = (): JSX.Element => {
	const [searchParams] = useSearchParams();
	const page = toNumber(searchParams.get("page")) ?? 1;

	const context = useAppContext();
	const [articleList, total] = context.usecases.article.getList((page - 1) * PAGE_SIZE, PAGE_SIZE);

	function handleChange(_event: React.ChangeEvent<unknown>, value: number): void {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", value.toString());
		window.location.href = `/articles?${params.toString()}`;
	}

	return (
		<>
			<GridBackground />
			<Typography variant="h4" align="center" gutterBottom>
				記事
			</Typography>

			<Grid mt={4} container spacing={2} columns={16}>
				{articleList.map((article) => (
					<Grid size={{ xs: 2, sm: 4, md: 4 }} key={article.id}>
						<CardActionArea component={RouterLink} to={`/articles/${article.id}`}>
							<Card sx={{ height: "100%", borderColor: "grey.500", borderWidth: 1, borderStyle: "solid" }}>
								{article.imageUrl ? (
									<CardMedia component="img" height="140" image={article.imageUrl} alt="article thumbnail" />
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
										{article.createdAt.toLocaleDateString("ja-JP", {
											year: "numeric",
											month: "2-digit",
											day: "2-digit",
										})}{" "}
										- {article.tags.join(", ")}
									</Typography>
									<Typography variant="h6">{article.title}</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				))}
			</Grid>

			<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
				<Pagination count={Math.ceil(total / PAGE_SIZE)} page={page} onChange={handleChange} />
			</Box>
		</>
	);
};
