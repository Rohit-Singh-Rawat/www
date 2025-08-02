import Link from 'next/link';
import ArrowUpRight from '../icons/arrow';
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
		<div className='flex flex-col w-full my-10 space-y-4'>
			<h2 className='text-lg font-medium text-foreground'>Get in touch</h2>
			<div className='flex flex-wrap gap-x-3'>
				{links.slice(0, 4).map((link, index) => (
					<Link
						key={index}
						href={link.url}
						target={link.external ? '_blank' : undefined}
						className='text-foreground hover:text-muted-foreground transition-colors flex items-baseline gap-x-1 underline underline-offset-4 decoration-muted-foreground/50 group font-light text-sm'
					>
						{link.name}{' '}
						<ArrowUpRight className='size-3 group-hover:translate-x-0.5 transition-transform group-hover:-translate-y-0 translate-y-0.5 ' />
					</Link>
				))}
				{links.length > 4 && (
					<Link
						href='/socials'
						className='text-foreground hover:text-muted-foreground transition-colors flex items-baseline gap-x-1 underline underline-offset-4 decoration-muted-foreground/50 group font-light text-sm'
					>
						See all{' '}
						<ArrowUpRight className='size-3 group-hover:translate-x-0.5 transition-transform group-hover:-translate-y-0 translate-y-0.5 ' />
					</Link>
				)}
			</div>
		</div>
	);
}
