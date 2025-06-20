import { Container } from "@mui/material";
import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const RootLayout = (): JSX.Element => {
	return (
		<>
			<Header />
			<Container sx={{ p: 3, mt: 8 }}>
				<Outlet />
			</Container>
			<Footer />
		</>
	);
};
