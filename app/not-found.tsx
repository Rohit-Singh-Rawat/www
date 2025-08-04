import Image from 'next/image';
import notFound from '@/public/images/lost.png';
import Link from 'next/link';

export default function NotFound() {
	return (
		<>
			<section aria-labelledby='error-heading'>
				<Image
					src={notFound}
					alt='Illustration of a person looking lost, representing page not found'
					width={500}
					height={300}
					className='aspect-video my-5'
				/>
				<div className='flex flex-col items-center justify-center space-y-4 z-10'>
					<h1
						id='error-heading'
						className='text-2xl font-normal text-foreground'
					>
						404
					</h1>
					<p className='text-sm text-muted-foreground font-light'>
						Page not found
					</p>
					<Link
						href='/'
						className='text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4 decoration-muted-foreground/50 font-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
						aria-label='Return to homepage'
					>
						Go home
					</Link>
				</div>
			</section>
		</>
	);
}
