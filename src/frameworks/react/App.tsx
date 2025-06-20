import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { About, Game, Home, NewsList, NotFound } from "./pages";
import { NewsDetails } from "./pages/news/NewsDetails";

export const App = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/news" element={<NewsList />} />
				<Route path="/news/:id" element={<NewsDetails />} />
				<Route path="/game" element={<Game />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};
