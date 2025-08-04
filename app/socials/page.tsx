import Link from 'next/link';
import { linksData } from '@/constant/wwwData';
import ArrowUpRight from '@/components/icons/arrow';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
	title: 'Socials',
	description: 'Connect with me on my social media platforms',
});

export default function SocialsPage() {
	return (
		<>
			<header>
				<h1 className='text-xl font-medium mb-4'>Connect</h1>
			</header>

			<section
				aria-labelledby='social-links-heading'
				className='w-full'
			>
				<h2
					id='social-links-heading'
					className='sr-only'
				>
					Social media links
				</h2>
				<nav aria-label='Social media and contact links'>
					<ul
						className='space-y-1'
						role='list'
					>
						{linksData.map((link, index) => (
							<li key={index}>
								<Link
									href={link.url}
									target={link.external ? '_blank' : undefined}
									rel={link.external ? 'noopener noreferrer' : undefined}
									className='flex items-center justify-between py-2 border-b border-dashed border-border/50 hover:bg-accent/30 transition-colors group px-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
									aria-label={`Connect via ${link.name}${
										link.external ? ' (opens in new tab)' : ''
									}`}
								>
									<span className='text-sm'>{link.name}</span>
									<ArrowUpRight
										className='w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors'
										aria-hidden='true'
									/>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>
		</>
	);
}
