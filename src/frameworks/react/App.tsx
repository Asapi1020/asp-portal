import { type JSX, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { About, Game, Home, NewsList, NotFound } from "./pages";
import { NewsDetails } from "./pages/news/NewsDetails";

export const App = (): JSX.Element => {
	return (
		<>
			<ScrollToTop />
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
		</>
	);
};

const ScrollToTop = (): null => {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: 不明なエラー
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};
