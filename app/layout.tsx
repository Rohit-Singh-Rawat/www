import type { Metadata } from 'next';
import './globals.css';
import satoshi from '@/lib/satoshiFont';
import BlurGradient from '../components/bg/BlurGradient';
import NoiseBackground from '../components/bg/NoiseBackground';
import Header from '@/components/home/Header';
import Footer from '@/components/home/footer';
import Logo from '@/components/home/logo';

export const metadata: Metadata = {
	title: 'Rohit Singh Rawat',
	description: 'Rohit Singh Rawat',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${satoshi.className} antialiased`}>
				<BlurGradient />
				<NoiseBackground />
				<main className='flex flex-col items-center justify-center max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-50 min-h-screen w-full'>
					<Logo className='fixed top-2 left-2 sm:top-4 sm:left-4 z-[100] w-6 h-6 sm:w-8 sm:h-8' />
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
