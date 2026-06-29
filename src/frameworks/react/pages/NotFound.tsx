import { Box, Button, Container, Paper, Typography } from "@mui/material";
import FrogImage from "@this/assets/not-found-frog.png";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Container maxWidth="sm">
			<Box
				sx={{
					mt: { xs: 2, sm: 4 },
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Typography
					variant="h4"
					component="h1"
					gutterBottom
					sx={{
						fontWeight: "bold",
						fontSize: { xs: "1.75rem", sm: "2.125rem" },
					}}
				>
					404 - Page Not Found
				</Typography>

				{/* Responsive image styling to prevent overflowing on small screens */}
				<img
					src={FrogImage}
					alt="迷子のカエル"
					style={{
						marginTop: 16,
						marginBottom: 16,
						maxWidth: "100%",
						height: "auto",
					}}
				/>

				<Paper
					elevation={3}
					sx={{
						padding: 2,
						borderRadius: 2,
						maxWidth: { xs: "100%", sm: 300 },
						boxSizing: "border-box",
					}}
				>
					<Typography variant="body1">
						<span role="img" aria-label="bubble">
							💬
						</span>{" "}
						道に迷っちゃったみたい…
					</Typography>
				</Paper>

				<Button variant="contained" color="primary" sx={{ mt: { xs: 3, sm: 4 } }} onClick={(): void => navigate("/")}>
					ホームに戻る
				</Button>
			</Box>
		</Container>
	);
};
