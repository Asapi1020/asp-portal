import { Box, Button, Paper, Typography } from "@mui/material";
import FrogImage from "@this/assets/not-found-frog.png";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Box mt={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
			<Typography variant="h4" gutterBottom>
				404 - Page Not Found
			</Typography>

			<img src={FrogImage} alt="迷子のカエル" style={{ marginTop: 16, marginBottom: 16 }} />

			<Paper
				elevation={3}
				sx={{
					padding: 2,
					borderRadius: 2,
					maxWidth: 300,
					textAlign: "center",
				}}
			>
				<Typography variant="body1">
					<span role="img" aria-label="bubble">
						💬
					</span>{" "}
					道に迷っちゃったみたい…
				</Typography>
			</Paper>

			<Button variant="contained" color="primary" sx={{ marginTop: 4 }} onClick={(): void => navigate("/")}>
				ホームに戻る
			</Button>
		</Box>
	);
};
