import { Metadata } from "next";

export const metadata: Metadata = {
	title: "First Next App",
	description: "My First Next App (App Router)",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}