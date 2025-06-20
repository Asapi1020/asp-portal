import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import type { JSX } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Header = (): JSX.Element => {
	return (
		<AppBar position="fixed">
			<Toolbar sx={{ mx: 16 }}>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					<Link component={RouterLink} to="/" color="inherit" underline="none">
						あさぴっぴポータル
					</Link>
				</Typography>
				<Button color="inherit" component={RouterLink} to="/game">
					ゲーム
				</Button>
				/
				<Button color="inherit" component={RouterLink} to="/news">
					ニュース
				</Button>
			</Toolbar>
		</AppBar>
	);
};
