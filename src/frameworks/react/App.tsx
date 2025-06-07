import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import type { JSX } from "react";

export const App = (): JSX.Element => {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div">
						個人ポータル
					</Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Box mt={4}>
					<Typography variant="h4" gutterBottom>
						ようこそ
					</Typography>
					<Typography variant="body1">ここはあなたのポータルサイトです。</Typography>
					<Box mt={2}>
						<Button variant="contained" color="primary">
							例のボタン
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
};
