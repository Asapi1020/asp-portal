import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { useState } from "react";
import type { JSX } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "./Icons";

export const Header = (): JSX.Element => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = (open: boolean) => (): void => {
		setIsMobileMenuOpen(open);
	};

	const menuItems = [
		{ label: "ゲーム", to: "/game" },
		{ label: "プログラミング", to: "/programming" },
		{ label: "記事", to: "/articles" },
		{ label: "ニュース", to: "/news" },
	];

	return (
		<AppBar position="fixed">
			<Toolbar
				sx={{
					mx: { xs: 2, sm: 4, md: 16 },
				}}
			>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					<Link component={RouterLink} to="/" color="inherit" underline="none">
						あさぴっぴポータル（開発中）
					</Link>
				</Typography>

				{/* Desktop Navigation Links - Hidden on extra small screens */}
				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						alignItems: "center",
						gap: 1,
					}}
				>
					{menuItems.map((item, index) => (
						<Box key={item.to} display="flex" alignItems="center">
							<Button color="inherit" component={RouterLink} to={item.to}>
								{item.label}
							</Button>
							{index < menuItems.length - 1 && (
								<Typography component="span" color="inherit" sx={{ opacity: 0.7, ml: 1 }}>
									/
								</Typography>
							)}
						</Box>
					))}
				</Box>

				{/* Mobile Hamburger Button - Visible only on extra small screens */}
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="end"
					onClick={toggleMobileMenu(true)}
					sx={{ display: { sm: "none" } }}
				>
					<HamburgerIcon />
				</IconButton>

				{/* Mobile Menu Drawer */}
				<Drawer
					anchor="right"
					open={isMobileMenuOpen}
					onClose={toggleMobileMenu(false)}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					<Box
						sx={{ width: 250 }}
						role="presentation"
						onClick={toggleMobileMenu(false)}
						onKeyDown={toggleMobileMenu(false)}
					>
						<List>
							{menuItems.map((item) => (
								<ListItem key={item.to} disablePadding>
									<ListItemButton component={RouterLink} to={item.to}>
										<ListItemText primary={item.label} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
			</Toolbar>
		</AppBar>
	);
};
