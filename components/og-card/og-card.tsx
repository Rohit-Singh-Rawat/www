'use client';

import Logo from '@/components/home/logo';

interface OgCardProps {
	name?: string;
	title?: string;
	className?: string;
}

export default function OgCard({
	name = 'Rohit Singh Rawat',
	title = 'Software Engineer',
	className = '',
}: OgCardProps) {
	return (
		<div className={`space-y-4 ${className}`}>
			<div className='flex flex-col gap-3 border border-border/50 aspect-[1.91/1] p-6 bg-background  shadow-inner shadow-black/20 justify-center items-center relative'>
				<div className='bg-[url("/images/noise2.png")] bg-[size:128px] w-full h-full bg-center bg-repeat opacity-[0.03] absolute top-0 left-0'></div>
				<div className='flex flex-col gap-1 border border-border/50 w-full h-full justify-center items-center border-dashed relative'>
					{/* Corner decorations */}
					<div className='absolute -top-6 -left-6 w-6 h-6 border-r border-b border-border/50 border-dashed'></div>
					<div className='absolute -top-6 -right-6 w-6 h-6 border-l border-b border-border/50 border-dashed'></div>
					<div className='absolute -bottom-6 -left-6 w-6 h-6 border-r border-t border-border/50 border-dashed'></div>
					<div className='absolute -bottom-6 -right-6 w-6 h-6 border-l border-t border-border/50 border-dashed'></div>

					<div className='flex flex-col gap-1 relative'>
						<Logo className='w-1 h-1 scale-[0.5] absolute top-[3px] left-1.5' />
						<h1 className='text-2xl font-medium'>{name}</h1>
						<h2 className='text-muted-foreground bg-accent text-center px-2'>
							{title}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
