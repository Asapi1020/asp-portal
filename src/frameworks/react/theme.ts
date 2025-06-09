import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#90caf9",
		},
		secondary: {
			main: "#f48fb1",
		},
	},
	typography: {
		fontFamily: [
			'"ヒラギノ丸ゴ Pro W4"',
			'"ヒラギノ丸ゴ Pro"',
			'"Hiragino Maru Gothic Pro"',
			'"heisei-maru-gothic-std"',
			'"ヒラギノ角ゴ Pro W3"',
			'"Hiragino Kaku Gothic Pro"',
			"sans-serif",
		].join(","),
	},
});
