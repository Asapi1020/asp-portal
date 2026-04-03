import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";
import { Avatar, Box, Button, Card, CardContent, Chip, Container, Link, Paper, Stack, Typography } from "@mui/material";
import { type Variants, motion } from "framer-motion";
import type { JSX } from "react";
import { GridBackground } from "../../components/Background";
import { GitHubIcon, SteamIcon, TypescriptIcon } from "../../components/Icons";

export const ProgrammingProfileHome = (): JSX.Element => {
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
			<Box sx={{ py: 8 }}>
				<GridBackground />

				<Typography variant="h4" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
					プログラミング プロフィール
				</Typography>

				<Timeline position="alternate">
					{/* 2019: B1 */}
					<TimelineItem>
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								2019
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot variant="outlined" color="primary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<motion.div
								key="2019"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={2019}>
									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Avatar
											variant="rounded"
											src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
											alt="Python"
											sx={{ width: 64, height: 64 }}
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
										<Box>
											<Typography variant="h6">初めてのプログラミング</Typography>
											<Typography variant="body2" sx={{ mt: 1 }}>
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
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
													<GitHubIcon />
													<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
														Discord-Bot-CDRecorder
													</Typography>
												</Stack>

												<Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
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
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								2020
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<motion.div
								key="2020"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={2020}>
									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Avatar
											variant="rounded"
											src="https://isocpp.org/files/img/cpp_logo.png"
											alt="C++"
											sx={{ width: 64, height: 64 }}
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
										<Box>
											<Typography variant="body2" sx={{ mt: 1 }}>
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
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								2021
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<motion.div
								key="2021"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={2021}>
									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Avatar
											variant="rounded"
											src="https://cdn2.steamgriddb.com/icon/efaf8fe94a274cae9685b96a9690c045/32/64x64.png"
											alt="KF2"
											sx={{ width: 64, height: 64 }}
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
										<Box>
											<Typography variant="h6">Killing Floor 2 MOD開発</Typography>
											<Typography variant="body2" sx={{ mt: 1 }}>
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
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
													<GitHubIcon />
													<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
														CD-Combined-Edition
													</Typography>
												</Stack>

												<Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
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
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								2022
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<motion.div
								key="2022"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={2022}>
									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Box>
											<Typography variant="h6">MODの一般公開</Typography>
											<Typography variant="body2" sx={{ mt: 1 }} align="left">
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
												<Box display="flex" alignItems="center" gap={2} mb={2}>
													<Avatar
														variant="rounded"
														src="https://images.steamusercontent.com/ugc/1826795324448058593/4DB19FCDDD8BA42697A7348FFC8920C1A5D98878/"
														alt="KF2"
														sx={{ width: 64, height: 64 }}
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
													<Box>
														<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
															Controlled Difficulty <br /> Combined Edition
														</Typography>
													</Box>
												</Box>
												<Stack direction="row" spacing={2}>
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
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								2023
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<motion.div
								key="2023"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={2023}>
									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Box>
											<Typography variant="h6">MODの継続的アップデート</Typography>
											<Typography variant="body2" sx={{ mt: 1 }} align="left">
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
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								2024
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<motion.div
								key="2024"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={2024}>
									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<TypescriptIcon width={64} height={64} />
										<Box>
											<Typography variant="h6">Webエンジニアとなる</Typography>
											<Typography variant="body2" sx={{ mt: 1 }} align="left">
												IT企業に就職し、Webエンジニアとして働き始める。
												<br />
												主にTypeScriptを使用してバックエンド開発を担当。
												ただし、フロントエンドやインフラ周りも経験している。
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
										<CardContent sx={{ p: "12px !important" }}>
											<Link
												href="https://github.com/Asapi1020/cd-record-leaderboard"
												target="_blank"
												rel="noopener noreferrer"
												color="inherit"
												underline="none"
											>
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
													<GitHubIcon />
													<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
														CD-Record-Leaderboard
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													MODのプレイデータを閲覧できるWebページ。マッチごとの記録や、プレイヤーごとの記録を確認できる。
												</Typography>

												<Stack direction="row" spacing={1} sx={{ mb: 1, justifyContent: "flex-start" }}>
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
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
													<GitHubIcon />
													<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
														CD-EAPI
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													MODのプレイデータを提供するAPI。MODがマッチ終了時にこのAPIへデータを送信することで、記録の保存とDiscordへの通知を行う。
												</Typography>

												<Stack direction="row" spacing={1} sx={{ mb: 1, justifyContent: "flex-start" }}>
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
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
													<GitHubIcon />
													<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
														YouTube Announcer
													</Typography>
												</Stack>

												<Typography
													variant="caption"
													color="text.secondary"
													sx={{ display: "block", mb: 1 }}
													align="left"
												>
													YouTubeの新規動画を検出し、指定したチャンネルの新しい動画をDiscordに通知するAPI。 Google Apps
													Scriptのタイマー機能を使用して定期的にAPIを呼び出している。
												</Typography>

												<Stack direction="row" spacing={1} sx={{ mb: 1, justifyContent: "flex-start" }}>
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
						<TimelineOppositeContent sx={{ m: "auto 0" }}>
							<Typography variant="h6" color="text.secondary">
								2025
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<motion.div
								key="2025"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<Paper elevation={3} sx={{ p: 2, mb: 2 }} key={2025}>
									<Box display="flex" alignItems="center" gap={2} mb={2}>
										<Box>
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
												<Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
													<GitHubIcon />
													<Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color="text.primary">
														ASP Portal
													</Typography>
												</Stack>

												<Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
													当サイトの開発を行っているリポジトリ。
												</Typography>

												<Stack direction="row" spacing={1} sx={{ mb: 1, justifyContent: "flex-start" }}>
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
