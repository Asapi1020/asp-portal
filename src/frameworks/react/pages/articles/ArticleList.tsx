import { toNumber } from "@asp1020/type-utils";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Pagination,
	Typography,
} from "@mui/material";
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

	const handleChange = (_event: React.ChangeEvent<unknown>, value: number): void => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", value.toString());
		window.location.href = `/articles?${params.toString()}`;
	};

	return (
		<Container maxWidth="lg" sx={{ py: { xs: 4, sm: 8 } }}>
			<GridBackground />
			<Typography variant="h4" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
				記事
			</Typography>

			{/* Adjusted layout based on standard 12-column grid */}
			<Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mt: 4 }}>
				{articleList.map((article) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={article.id} display="flex">
						<CardActionArea
							component={RouterLink}
							to={`/articles/${article.id}`}
							sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}
						>
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									height: "100%",
									borderColor: "grey.500",
									borderWidth: 1,
									borderStyle: "solid",
								}}
							>
								{article.imageUrl ? (
									<CardMedia component="img" height="140" image={article.imageUrl} alt="article thumbnail" />
								) : (
									<Box
										sx={{
											// Show 'flex' layout on desktop/tablet, hide entirely on mobile
											display: { xs: "none", sm: "flex" },
											height: 140,
											backgroundColor: "grey.700",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Typography variant="body2" color="text.secondary">
											No Image
										</Typography>
									</Box>
								)}
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography variant="body2" color="text.secondary" gutterBottom>
										{article.createdAt.toLocaleDateString("ja-JP", {
											year: "numeric",
											month: "2-digit",
											day: "2-digit",
										})}{" "}
										- {article.tags.join(", ")}
									</Typography>
									<Typography variant="h6" component="h2" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
										{article.title}
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				))}
			</Grid>

			<Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 4, sm: 6 } }}>
				<Pagination
					count={Math.ceil(total / PAGE_SIZE)}
					page={page}
					onChange={handleChange}
					size={window.innerWidth < 600 ? "small" : "medium"}
				/>
			</Box>
		</Container>
	);
};
