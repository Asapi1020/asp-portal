import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Container,
	Link,
	Paper,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { type Variants, motion } from "framer-motion";
import type { JSX } from "react";
import { GridBackground } from "../../components/Background";
import { GitHubIcon, SteamIcon, TypescriptIcon } from "../../components/Icons";

export const ProgrammingProfileHome = (): JSX.Element => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const fadeInUp: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: "easeOut" },
		},
	};

	return (
		<Container maxWidth="md">
			<Box sx={{ py: { xs: 4, sm: 8 } }}>
				<GridBackground />

				<Typography
					variant="h4"
					component="h1"
					align="center"
					gutterBottom
					sx={{
						fontWeight: "bold",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						columnGap: 2, // 16px spacing between words when on the same line
						rowGap: 0, // No extra vertical spacing needed when wrapped
					}}
				>
					<Box component="span" sx={{ display: "inline-block" }}>
						プログラミング
					</Box>
					<Box component="span" sx={{ display: "inline-block" }}>
						プロフィール
					</Box>
				</Typography>

				<Timeline
					position={isMobile ? "left" : "alternate"}
					sx={{
						mt: 4,
						p: { xs: 0, sm: 2 },
						"& .MuiTimelineItem-root:before": {
							display: isMobile ? "none" : "block",
						},
					}}
				>
					{/* 2019: B1 */}
					<TimelineItem>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								2019
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot variant="outlined" color="primary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
							<motion.div
								key="2019"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
									<Typography
										variant="h5"
										color="primary"
										fontWeight="bold"
										sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}
									>
										2019
									</Typography>

									{/* Icon & Title: Kept row layout on mobile */}
									<Box display="flex" flexDirection="row" alignItems="center" gap={2} mb={2}>
										<Avatar
											variant="rounded"
											src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
											alt="Python"
											sx={{ width: { xs: 48, sm: 64 }, height: { xs: 48, sm: 64 }, flexShrink: 0 }}
											slotProps={{
												img: {
													style: {
														objectFit: "contain",
														objectPosition: "center",
														width: "100%",
														height: "100%",
													},
												},
											}}
										/>
										<Box minWidth={0}>
											<Typography variant="h6" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
												初めてのプログラミング
											</Typography>
											<Typography variant="body2" sx={{ mt: 0.5 }}>
												大学でPythonに触れ、プログラミングの基礎を学ぶ。
											</Typography>
										</Box>
									</Box>
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "background.paper",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<Link
											href="https://github.com/Asapi1020/Discord-Bot-CDRecorder"
											target="_blank"
											rel="noopener noreferrer"
											color="inherit"
											underline="none"
										>
											<CardContent sx={{ p: "12px !important" }}>
												{/* Card Header: Prevent wrapping into vertical on mobile */}
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5} sx={{ minWidth: 0 }}>
													<Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
														<GitHubIcon />
													</Box>
													<Typography
														variant="subtitle2"
														sx={{ fontWeight: "bold", wordBreak: "break-all" }}
														color="text.primary"
													>
														Discord-Bot-CDRecorder
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													Pythonで開発したDiscord Bot。Webスクレイピングによる情報収集とDiscordへの通知を行う。
												</Typography>

												<Stack direction="row" spacing={2}>
													<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
														<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#3572A5" }} />{" "}
														<Typography variant="caption" color="text.primary">
															Python
														</Typography>
													</Box>
												</Stack>
											</CardContent>
										</Link>
									</Card>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>

					{/* 2020: B2 */}
					<TimelineItem>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								2020
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
							<motion.div
								key="2020"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
									<Typography
										variant="h5"
										color="secondary"
										fontWeight="bold"
										sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}
									>
										2020
									</Typography>

									{/* Icon & Text Layout */}
									<Box display="flex" flexDirection="row" alignItems="center" gap={2}>
										<Avatar
											variant="rounded"
											src="https://isocpp.org/files/img/cpp_logo.png"
											alt="C++"
											sx={{ width: { xs: 48, sm: 64 }, height: { xs: 48, sm: 64 }, flexShrink: 0 }}
											slotProps={{
												img: {
													style: {
														objectFit: "contain",
														objectPosition: "center",
														width: "100%",
														height: "100%",
													},
												},
											}}
										/>
										<Box minWidth={0}>
											<Typography variant="body2" align="left">
												一応C++も少しだけ学びましたが、
												<br />
												ほとんど経験はありません。
											</Typography>
										</Box>
									</Box>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>

					{/* 2021: MOD開発 */}
					<TimelineItem>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								2021
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
							<motion.div
								key="2021"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
									<Typography
										variant="h5"
										color="secondary"
										fontWeight="bold"
										sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}
									>
										2021
									</Typography>

									{/* Icon & Title Layout */}
									<Box display="flex" flexDirection="row" alignItems="center" gap={2} mb={2}>
										<Avatar
											variant="rounded"
											src="https://cdn2.steamgriddb.com/icon/efaf8fe94a274cae9685b96a9690c045/32/64x64.png"
											alt="KF2"
											sx={{ width: { xs: 48, sm: 64 }, height: { xs: 48, sm: 64 }, flexShrink: 0 }}
											slotProps={{
												img: {
													style: {
														objectFit: "contain",
														objectPosition: "center",
														width: "100%",
														height: "100%",
													},
												},
											}}
										/>
										<Box minWidth={0}>
											<Typography variant="h6" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
												Killing Floor 2 MOD開発
											</Typography>
											<Typography variant="body2" sx={{ mt: 0.5 }}>
												Killing Floor 2のMOD開発を数年間にわたり行う。 MODサーバの運営も行った。
											</Typography>
										</Box>
									</Box>
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "background.paper",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<Link
											href="https://github.com/Asapi1020/CD-Combined-Edition"
											target="_blank"
											rel="noopener noreferrer"
											color="inherit"
											underline="none"
										>
											<CardContent sx={{ p: "12px !important" }}>
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5} sx={{ minWidth: 0 }}>
													<Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
														<GitHubIcon />
													</Box>
													<Typography
														variant="subtitle2"
														sx={{ fontWeight: "bold", wordBreak: "break-all" }}
														color="text.primary"
													>
														CD-Combined-Edition
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													ゲームの難易度をプレイヤーが詳細にカスタマイズできるMOD。ゲームプレイを快適にするための様々な機能も提供。
												</Typography>

												<Stack direction="row" spacing={2}>
													<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
														<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F54927" }} />{" "}
														<Typography variant="caption" color="text.primary">
															UnrealScript
														</Typography>
													</Box>
												</Stack>
											</CardContent>
										</Link>
									</Card>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>

					{/* 2022: MOD公開 */}
					<TimelineItem>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								2022
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
							<motion.div
								key="2022"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
									<Typography
										variant="h5"
										color="secondary"
										fontWeight="bold"
										sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}
									>
										2022
									</Typography>

									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Box minWidth={0}>
											<Typography variant="h6" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
												MODの一般公開
											</Typography>
											<Typography variant="body2" sx={{ mt: 0.5 }} align="left">
												Steam WorkshopにてMODをフルリリース。 日韓を中心に複数のサーバーで導入され、好評を博す。
											</Typography>
										</Box>
									</Box>
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "#253755",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<Link
											href="https://steamcommunity.com/sharedfiles/filedetails/?id=2862691598"
											target="_blank"
											rel="noopener noreferrer"
											color="inherit"
											underline="none"
										>
											<CardContent sx={{ p: "12px !important" }}>
												{/* Icon & Title Layout inside Steam Card */}
												<Box display="flex" flexDirection="row" alignItems="center" gap={2} mb={2}>
													<Avatar
														variant="rounded"
														src="https://images.steamusercontent.com/ugc/1826795324448058593/4DB19FCDDD8BA42697A7348FFC8920C1A5D98878/"
														alt="KF2"
														sx={{ width: { xs: 48, sm: 64 }, height: { xs: 48, sm: 64 }, flexShrink: 0 }}
														slotProps={{
															img: {
																style: {
																	objectFit: "contain",
																	objectPosition: "center",
																	width: "100%",
																	height: "100%",
																},
															},
														}}
													/>
													<Box minWidth={0}>
														<Typography
															variant="subtitle2"
															sx={{ fontWeight: "bold", lineHeight: 1.2 }}
															color="text.primary"
														>
															Controlled Difficulty <br /> Combined Edition
														</Typography>
													</Box>
												</Box>
												<Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
													<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
														<SteamIcon />
														<Typography variant="caption" color="text.primary">
															Steam Workshop
														</Typography>
														<Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
															2022年9月14日
														</Typography>
													</Box>
												</Stack>
											</CardContent>
										</Link>
									</Card>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>

					{/* 2023: MODアップデート */}
					<TimelineItem>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								2023
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
							<motion.div
								key="2023"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
									<Typography
										variant="h5"
										color="secondary"
										fontWeight="bold"
										sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}
									>
										2023
									</Typography>

									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Box minWidth={0}>
											<Typography variant="h6" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
												MODの継続的アップデート
											</Typography>
											<Typography variant="body2" sx={{ mt: 0.5 }} align="left">
												機能追加、改善、バグ修正などのアップデートを継続的に実施。
												ユーザーフィードバックを積極的に取り入れ、MODの品質向上に努める。
											</Typography>
										</Box>
									</Box>
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "#181818",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<Link
											href="https://silly-maple-a31.notion.site/CD-Announcements-ea854482444e424d913a5fbafafb9f8f"
											target="_blank"
											rel="noopener noreferrer"
											color="inherit"
											underline="none"
										>
											<CardContent sx={{ p: "12px !important" }}>
												<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
													アップデート情報
												</Typography>
											</CardContent>
										</Link>
									</Card>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>

					{/* 2024: 現在 */}
					<TimelineItem>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								2024
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
							<motion.div
								key="2024"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
									<Typography
										variant="h5"
										color="secondary"
										fontWeight="bold"
										sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}
									>
										2024
									</Typography>

									{/* Icon & Title Layout */}
									<Box display="flex" flexDirection="row" alignItems="center" gap={2} mb={2}>
										<Box sx={{ flexShrink: 0 }}>
											<TypescriptIcon width={isMobile ? 48 : 64} height={isMobile ? 48 : 64} />
										</Box>
										<Box minWidth={0}>
											<Typography variant="h6" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
												Webエンジニアとなる
											</Typography>
											<Typography variant="body2" sx={{ mt: 0.5 }} align="left">
												IT企業に就職し、Webエンジニアとして働き始める。 主にTypeScriptを使用してバックエンド開発を担当。
											</Typography>
										</Box>
									</Box>

									{/* Card 1 */}
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "background.paper",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<CardContent sx={{ p: "12px !important" }}>
											<Link
												href="https://github.com/Asapi1020/cd-record-leaderboard"
												target="_blank"
												rel="noopener noreferrer"
												color="inherit"
												underline="none"
											>
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5} sx={{ minWidth: 0 }}>
													<Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
														<GitHubIcon />
													</Box>
													<Typography
														variant="subtitle2"
														sx={{ fontWeight: "bold", wordBreak: "break-all" }}
														color="text.primary"
													>
														CD-Record-Leaderboard
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													MODのプレイデータを閲覧できるWebページ。
												</Typography>

												<Stack
													direction="row"
													spacing={1}
													sx={{ mb: 1, justifyContent: "flex-start", flexWrap: "wrap", gap: 0.5 }}
												>
													<Chip label="vue3" size="small" sx={{ backgroundColor: "#1d553c", color: "#5dffb6" }} />
													<Chip label="vuetify" size="small" sx={{ backgroundColor: "#0b315c", color: "#64acff" }} />
												</Stack>

												<Stack direction="row" spacing={2}>
													<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
														<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#3572A5" }} />{" "}
														<Typography variant="caption" color="text.primary">
															Typescript
														</Typography>
													</Box>
												</Stack>
											</Link>

											<Stack direction="row" spacing={1} sx={{ justifyContent: "flex-start", mt: 1 }}>
												<Button
													variant="text"
													size="small"
													color="primary"
													sx={{
														outline: "1px solid gray",
														"&:hover": { outline: "1px solid", outlineColor: "primary.main" },
													}}
													onClick={(): Window | null =>
														window.open("https://cd-record-leaderboard.vercel.app/", "_blank", "noopener,noreferrer")
													}
												>
													<Typography variant="button" color="primary">
														🔗WEBサイトを見る
													</Typography>
												</Button>
											</Stack>
										</CardContent>
									</Card>

									{/* Card 2 */}
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "background.paper",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<Link
											href="https://github.com/Asapi1020/cd-eapi"
											target="_blank"
											rel="noopener noreferrer"
											color="inherit"
											underline="none"
										>
											<CardContent sx={{ p: "12px !important" }}>
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5} sx={{ minWidth: 0 }}>
													<Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
														<GitHubIcon />
													</Box>
													<Typography
														variant="subtitle2"
														sx={{ fontWeight: "bold", wordBreak: "break-all" }}
														color="text.primary"
													>
														CD-EAPI
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													MODのプレイデータを提供するAPI。
												</Typography>

												<Stack
													direction="row"
													spacing={1}
													sx={{ mb: 1, justifyContent: "flex-start", flexWrap: "wrap", gap: 0.5 }}
												>
													<Chip label="vercel-api" size="small" sx={{ backgroundColor: "#0b315c", color: "#64acff" }} />
													<Chip label="mongodb" size="small" sx={{ backgroundColor: "#664a21", color: "#ffbb54" }} />
												</Stack>

												<Stack direction="row" spacing={2}>
													<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
														<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#3572A5" }} />{" "}
														<Typography variant="caption" color="text.primary">
															Typescript
														</Typography>
													</Box>
												</Stack>
											</CardContent>
										</Link>
									</Card>

									{/* Card 3 */}
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "background.paper",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<Link
											href="https://github.com/Asapi1020/youtube-announcer"
											target="_blank"
											rel="noopener noreferrer"
											color="inherit"
											underline="none"
										>
											<CardContent sx={{ p: "12px !important" }}>
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5} sx={{ minWidth: 0 }}>
													<Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
														<GitHubIcon />
													</Box>
													<Typography
														variant="subtitle2"
														sx={{ fontWeight: "bold", wordBreak: "break-all" }}
														color="text.primary"
													>
														YouTube Announcer
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													YouTubeの新規動画を検出し、Discordに通知するAPI。
												</Typography>

												<Stack
													direction="row"
													spacing={1}
													sx={{ mb: 1, justifyContent: "flex-start", flexWrap: "wrap", gap: 0.5 }}
												>
													<Chip
														label="youtube-api-v3"
														size="small"
														sx={{ backgroundColor: "#4e0000", color: "#ff3737" }}
													/>
													<Chip label="vercel-api" size="small" sx={{ backgroundColor: "#0b315c", color: "#64acff" }} />
													<Chip label="mongodb" size="small" sx={{ backgroundColor: "#664a21", color: "#ffbb54" }} />
												</Stack>

												<Stack direction="row" spacing={2}>
													<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
														<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#3572A5" }} />{" "}
														<Typography variant="caption" color="text.primary">
															Typescript
														</Typography>
													</Box>
												</Stack>
											</CardContent>
										</Link>
									</Card>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>

					{/* 2025 */}
					<TimelineItem>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Typography variant="h6" color="text.secondary">
								2025
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: { xs: 1, sm: 2 } }}>
							<motion.div
								key="2025"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
									<Typography
										variant="h5"
										color="secondary"
										fontWeight="bold"
										sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}
									>
										2025
									</Typography>

									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Box minWidth={0}>
											<Typography variant="h6">当サイトの開発開始</Typography>
										</Box>
									</Box>
									<Card
										variant="outlined"
										sx={{
											mt: 2,
											bgcolor: "background.paper",
											transition: "0.3s",
											"&:hover": {
												borderColor: "primary.main",
												boxShadow: (theme): string => theme.shadows[4],
												transform: "translateY(-2px)",
											},
										}}
									>
										<Link
											href="https://github.com/Asapi1020/asp-portal"
											target="_blank"
											rel="noopener noreferrer"
											color="inherit"
											underline="none"
										>
											<CardContent sx={{ p: "12px !important" }}>
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5} sx={{ minWidth: 0 }}>
													<Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
														<GitHubIcon />
													</Box>
													<Typography
														variant="subtitle2"
														sx={{ fontWeight: "bold", wordBreak: "break-all" }}
														color="text.primary"
													>
														ASP Portal
													</Typography>
												</Stack>

												<Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
													当サイトの開発を行っているリポジトリ。
												</Typography>

												<Stack
													direction="row"
													spacing={1}
													sx={{ mb: 1, justifyContent: "flex-start", flexWrap: "wrap", gap: 0.5 }}
												>
													<Chip label="react" size="small" sx={{ backgroundColor: "#0b315c", color: "#64acff" }} />
													<Chip label="mui" size="small" sx={{ backgroundColor: "#0b315c", color: "#64acff" }} />
												</Stack>

												<Stack direction="row" spacing={2}>
													<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
														<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#3572A5" }} />{" "}
														<Typography variant="caption" color="text.primary">
															Typescript
														</Typography>
													</Box>
												</Stack>
											</CardContent>
										</Link>
									</Card>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</Box>
		</Container>
	);
};
