import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
	title: 'Blogs ',
	description: 'My blogs',
});

export default function BlogsPage() {
	return (
		<main className='text-center flex-1 flex items-center justify-center flex-col' role="main">
			<section aria-labelledby="coming-soon-heading">
				<h1 id="coming-soon-heading" className='text-2xl font-medium mb-2'>Coming Soon</h1>
				<p className='text-muted-foreground'>
					Blog posts will be available here shortly.
				</p>
			</section>
		</main>
	);
}
