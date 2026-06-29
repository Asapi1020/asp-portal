import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";
import { Avatar, Box, Container, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { playedGameList } from "@this/data/playedGameList";
import type { PlayedGame } from "@this/domain/game/PlayedGame";
import { type Variants, motion } from "framer-motion";
import { type JSX, useMemo } from "react";
import { GridBackground } from "../../components/Background";

export const Game = (): JSX.Element => {
	const theme = useTheme();
	// Check if the screen width is smaller than 'sm' (600px)
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const sortedGameList = playedGameList.sort((a, b) => b.playedAt.getTime() - a.playedAt.getTime());

	const groupedByYear = useMemo(() => {
		return sortedGameList.reduce(
			(acc, game) => {
				const year = game.playedAt.getFullYear();

				if (!acc[year]) {
					acc[year] = [];
				}

				acc[year].push(game);
				return acc;
			},
			{} as Record<number, PlayedGame[]>,
		);
	}, [sortedGameList]);

	const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

	const fadeInUp: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: "easeOut" },
		},
	};

	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<GridBackground />
			<Typography variant="h4" align="center" gutterBottom component="h1">
				あさぴっぴのゲーム歴
			</Typography>

			<Timeline
				position={isMobile ? "left" : "alternate"}
				sx={{
					mt: 4,
					p: { xs: 0, sm: 2 },
					// Adjust timeline alignment for mobile 'left' position
					"& .MuiTimelineItem-root:before": {
						display: isMobile ? "none" : "block",
					},
				}}
			>
				{sortedYears.map((year) => (
					<TimelineItem key={year}>
						{/* Hidden on mobile, shown on desktop */}
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								{year}
							</Typography>
						</TimelineOppositeContent>

						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>

						<TimelineContent sx={{ py: 2, px: { xs: 1, sm: 2 } }}>
							{/* Visible only on mobile to indicate the year */}
							<Typography
								variant="h5"
								color="secondary"
								fontWeight="bold"
								sx={{
									display: { xs: "block", sm: "none" },
									mb: 2,
									ml: 1,
								}}
							>
								{year}
							</Typography>

							{groupedByYear[Number(year)].map((game) => (
								<motion.div
									key={game.id}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									variants={fadeInUp}
								>
									<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
										<Box
											display="flex"
											flexDirection={{ xs: "column", sm: "row" }}
											alignItems={{ xs: "flex-start", sm: "center" }}
											gap={2}
										>
											<Avatar
												variant="rounded"
												src={game.thumbnailUrl}
												alt={game.title}
												sx={{
													width: { xs: 48, sm: 64 },
													height: { xs: 48, sm: 64 },
												}}
											/>
											<Box>
												<Typography variant="h6" component="h2" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
													{game.title}
												</Typography>

												<Typography variant="body2" color="textSecondary">
													発売日:{" "}
													{game.releaseDate.toLocaleDateString("ja-JP", {
														year: "numeric",
														month: "short",
														day: "numeric",
													})}
												</Typography>

												<Typography variant="body2" color="textSecondary">
													{game.platform}
												</Typography>

												{game.description && (
													<Typography variant="body2" sx={{ mt: 1, wordBreak: "break-word" }}>
														{game.description}
													</Typography>
												)}
											</Box>
										</Box>
									</Paper>
								</motion.div>
							))}
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Container>
	);
};
