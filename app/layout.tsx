import type { Metadata } from 'next';
import './globals.css';
import satoshi from '@/lib/satoshiFont';
import BlurGradient from '../components/bg/BlurGradient';
import NoiseBackground from '../components/bg/NoiseBackground';
import Header from '@/components/home/Header';
import Footer from '@/components/home/footer';
import Logo from '@/components/home/logo';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${satoshi.className} antialiased`}>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[200]'
				>
					Skip to main content
				</a>
				<BlurGradient />
				<NoiseBackground />
				<div className='flex flex-col items-center justify-center max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-50 min-h-screen w-full'>
					<Logo className='fixed top-2 left-2 sm:top-4 sm:left-4 z-[100] w-6 h-6 sm:w-8 sm:h-8' />
					<Header />
					<main
						id='main-content'
						role='main'
						aria-label='Main content'
					>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
