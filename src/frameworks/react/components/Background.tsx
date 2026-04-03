import { Box, styled } from "@mui/material";
import type { JSX } from "react";

const StyledGrid = styled(Box)(({ theme }) => ({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: -1,
	pointerEvents: "none",

	// 網目を作るための背景指定
	backgroundImage: `
    linear-gradient(${theme.palette.divider} 1px, transparent 1px),
    linear-gradient(90deg, ${theme.palette.divider} 1px, transparent 1px)
  `,
	backgroundSize: "40px 40px",

	maskImage: "radial-gradient(circle, white 0%, transparent 80%)",
	WebkitMaskImage: "radial-gradient(circle, white 0%, transparent 80%)",
	opacity: 1.0,
}));

export const GridBackground = (): JSX.Element => {
	return <StyledGrid aria-hidden="true" />;
};
