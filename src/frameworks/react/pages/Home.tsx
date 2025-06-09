import {
	Avatar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	IconButton,
	Typography,
} from "@mui/material";
import type { JSX } from "react";
import { GitHubIcon, SteamIcon, XIcon, YouTubeIcon } from "../components/Icons";
import { theme } from "../theme";

export const Home = (): JSX.Element => {
	return (
		<Container>
			<Box mt={4} display="flex" alignItems="center">
				<Box flex="1" display="flex" justifyContent="center">
					<Avatar alt="asp avatar" src="https://github.com/Asapi1020.png?size=512" sx={{ width: 512, height: 512 }}>
						avatar
					</Avatar>
				</Box>

				<Box flex="1" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
					<Typography variant="h4">あさぴっぴ</Typography>

					<Typography variant="body1" align="center" sx={{ maxWidth: 400, mt: 2 }}>
						PCゲーマーであり、ゲーム実況者。
						<br />
						KF2 Mod開発者であり、Webエンジニア。
						<br />
						登山が趣味。エレクトーンとお勉強が特技。
					</Typography>

					<Box mt={3} display="flex" gap={2}>
						<IconButton
							component="a"
							href="https://www.youtube.com/@asapi1020"
							target="_blank"
							rel="noopener"
							sx={{ boxShadow: 3, backgroundColor: theme.palette.info.contrastText }}
						>
							<YouTubeIcon />
						</IconButton>

						<IconButton
							component="a"
							href="https://github.com/Asapi1020"
							target="_blank"
							rel="noopener"
							sx={{ boxShadow: 3, backgroundColor: theme.palette.info.contrastText }}
						>
							<GitHubIcon />
						</IconButton>

						<IconButton
							component="a"
							href="https://x.com/1020_asapi"
							target="_blank"
							rel="noopener"
							sx={{ boxShadow: 3, backgroundColor: theme.palette.info.contrastText }}
						>
							<XIcon />
						</IconButton>

						<IconButton
							component="a"
							href="https://steamcommunity.com/id/asp1020/"
							target="_blank"
							rel="noopener"
							sx={{ boxShadow: 3, backgroundColor: theme.palette.info.contrastText }}
						>
							<SteamIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>

			<Box
				mt={4}
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				sx={{ backgroundColor: theme.palette.info.contrastText, borderRadius: 2, padding: 4, boxShadow: 3 }}
			>
				<Typography variant="h4" gutterBottom>
					最新情報
				</Typography>

				<Typography variant="body1" gutterBottom>
					ここに最新情報が表示されます。あさぴっぴの最新のニュースやアップデートをチェックしてください。 (TBA)
				</Typography>

				<Box mt={2}>
					<Button variant="contained" color="primary">
						もっと見る（TBA）
					</Button>
				</Box>
			</Box>

			<Box mt={4} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
				<Card sx={{ width: 500 }}>
					<CardActionArea>
						<CardMedia component="img" height="140" image="pending.jpg" alt="game" />

						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								ゲーム
							</Typography>

							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								2020年まではほとんど星のカービィシリーズしかプレイしていませんでした。
								<br />
								しかし同年11月にゲーミングPCを購入してからは、様々なゲームをプレイするようになりました。
								<br />
								ここでは、今までプレイしてきたゲームの紹介や、投稿した動画のリンクを掲載しています。
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card sx={{ mt: 4, width: 500 }}>
					<CardActionArea>
						<CardMedia component="img" height="140" image="pending.jpg" alt="programming" />

						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								プログラミング
							</Typography>

							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								2019年、大学の授業でPythonを少しだけ触りました。
								<br />
								本格的にプログラミングにハマったのは2021年の春頃からです。
								<br />
								Killing Floor 2なるゲームのMOD開発に数年間取り組んでいました。
								<br />
								現在はWebエンジニアとして、様々な開発を行っています。
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card sx={{ mt: 4, width: 500 }}>
					<CardActionArea>
						<CardMedia component="img" height="140" image="pending.jpg" alt="mountain" />

						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								登山
							</Typography>

							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								初めての登山は小学3年生の時でした。
								<br />
								6年生の時には親に連れられて、富士山に登りました。
								<br />
								高校では山岳部に所属し、様々な山を登り、基礎的な登山知識を学びました。
								<br />
								現在はプライベートで登山を楽しんでいます。
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card sx={{ mt: 4, width: 500 }}>
					<CardActionArea>
						<CardMedia component="img" height="140" image="pending.jpg" alt="music" />

						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								音楽
							</Typography>

							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								5歳からエレクトーンを習い始め、18年間続けました。
								<br />
								JAZZやクラシック、ロックやポップスなど、幅広いジャンルに関心があります。
								<br />
								DTMによるボカロ作曲の経験もわずかながらあります。
								<br />
								2021年からずっと真夜中でいいのに。のプレミアム会員です。
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card sx={{ mt: 4, width: 500 }}>
					<CardActionArea>
						<CardMedia component="img" height="140" image="pending.jpg" alt="study" />

						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								お勉強
							</Typography>

							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								所謂お勉強は得意です。
								<br />
								中学生で漢検2級、高校生で英検2級を取得しました。
								<br />
								受験も僕にとってはゲームのようなものでした。
								<br />
								理論物理学に関心があります。
								<br />
								語学にも興味があり、英語と中国語、韓国語を少しだけ勉強しています。
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Box mt={2}>
					<Button variant="contained" color="primary">
						その他の趣味を見る（TBA）
					</Button>
				</Box>
			</Box>
		</Container>
	);
};
