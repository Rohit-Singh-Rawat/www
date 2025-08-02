import Link from 'next/link';
import { linksData } from '@/constant/wwwData';
import ArrowUpRight from '@/components/icons/arrow';

export default function SocialsPage() {
	return (
		<div className='w-full  py-8 flex-1'>
			<h1 className='text-xl font-medium mb-4'>Connect</h1>

			<div className='space-y-1 '>
				{linksData.map((link, index) => (
					<Link
						key={index}
						href={link.url}
						target={link.external ? '_blank' : undefined}
						className='flex items-center justify-between py-2 border-b border-dashed border-border/50 hover:bg-accent/30 transition-colors group px-2'
					>
						<span className='text-sm'>{link.name}</span>
						<ArrowUpRight className='w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors' />
					</Link>
				))}
			</div>
		</div>
	);
}
