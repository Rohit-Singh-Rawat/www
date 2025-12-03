import localFont from "next/font/local";

const bespoke = localFont({
	src: [
		{
			path: "../public/fonts/bespoke/BespokeSerif-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-Extrabold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-ExtraboldItalic.woff2",
			weight: "800",
			style: "italic",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-Variable.woff2",
			weight: "100 900",
			style: "normal",
		},
		{
			path: "../public/fonts/bespoke/BespokeSerif-VariableItalic.woff2",
			weight: "100 900",
			style: "italic",
		},
	],
	variable: "--font-bespoke",
	display: "swap",
});

export default bespoke;


