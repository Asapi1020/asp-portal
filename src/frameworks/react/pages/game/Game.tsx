import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { playedGameList } from "@this/data/playedGameList";
import type { PlayedGame } from "@this/domain/game/PlayedGame";
import { type Variants, motion } from "framer-motion";
import { type JSX, useMemo } from "react";

export const Game = (): JSX.Element => {
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
		<>
			<Typography variant="h4" align="center" gutterBottom>
				あさぴっぴのゲーム歴
			</Typography>

			<Timeline position="alternate" sx={{ mt: 4 }}>
				{sortedYears.map((year) => (
					<TimelineItem key={year}>
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								{year}
							</Typography>
						</TimelineOppositeContent>

						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>

						<TimelineContent sx={{ py: 2, px: 2 }}>
							{groupedByYear[Number(year)].map((game) => (
								<motion.div
									key={game.id}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									variants={fadeInUp}
								>
									<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={game.id}>
										<Box display="flex" alignItems="center" gap={2}>
											<Avatar
												variant="rounded"
												src={game.thumbnailUrl}
												alt={game.title}
												sx={{ width: 64, height: 64 }}
											/>
											<Box>
												<Typography variant="h6">{game.title}</Typography>

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
													<Typography variant="body2" sx={{ mt: 1 }}>
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
		</>
	);
};
