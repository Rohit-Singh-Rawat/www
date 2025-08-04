import Link from 'next/link';
import ArrowUpRight from '../icons/arrow';
import Heading from './heading';
interface LinkItem {
	name: string;
	url: string;
	external?: boolean;
}

interface LinksProps {
	links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
	return (
		<section
			className='flex flex-col w-full mb-10 space-y-4'
			aria-labelledby='contact-heading'
		>
			<div id='contact-heading'>
				<Heading title='Get in touch' />
			</div>
			<nav aria-label='Contact and social links'>
				<ul
					className='flex flex-wrap gap-x-3'
					role='list'
				>
					{links.slice(0, 4).map((link, index) => (
						<li key={index}>
							<Link
								href={link.url}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
								className='text-foreground hover:text-muted-foreground transition-colors flex items-baseline gap-x-1 underline underline-offset-4 decoration-muted-foreground/50 group font-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
								aria-label={`Contact via ${link.name}${
									link.external ? ' (opens in new tab)' : ''
								}`}
							>
								{link.name}{' '}
								<ArrowUpRight
									className='size-3 group-hover:translate-x-0.5 transition-transform group-hover:-translate-y-0 translate-y-0.5'
									aria-hidden='true'
								/>
							</Link>
						</li>
					))}
					{links.length > 4 && (
						<li>
							<Link
								href='/socials'
								className='text-foreground hover:text-muted-foreground transition-colors flex items-baseline gap-x-1 underline underline-offset-4 decoration-muted-foreground/50 group font-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
								aria-label='View all social links'
							>
								See all{' '}
								<ArrowUpRight
									className='size-3 group-hover:translate-x-0.5 transition-transform group-hover:-translate-y-0 translate-y-0.5'
									aria-hidden='true'
								/>
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</section>
	);
}
