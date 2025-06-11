import { Box, Typography } from "@mui/material";
import type { JSX } from "react";
import { theme } from "../theme";

export const Footer = (): JSX.Element => {
	return (
		<Box
			component="footer"
			sx={{
				mt: "auto",
				py: 2,
				px: 2,
				textAlign: "center",
				backgroundColor: theme.palette.grey[900],
			}}
		>
			<Typography variant="body2" color="text.secondary">
				© 2025 あさぴっぴポータル. All rights reserved.
			</Typography>
		</Box>
	);
};
