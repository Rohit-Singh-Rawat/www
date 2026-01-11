'use client';

import Image from 'next/image';
import Link from '@/components/ui/Link';
import { NoiseBackground } from '@/components/animated/noise-bg';
import { ProjectItem } from '@/types';
import { RightArrow } from '../icons/arrow';

interface ProjectCardProps {
	project: ProjectItem;
	index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
	const hasUrl = project.url && project.url !== '';
	const hasGithub = project.github && project.github !== '';
	const mainLink = hasUrl ? project.url! : hasGithub ? project.github! : '#';

	const handleCardClick = () => {
		if (mainLink !== '#') {
			window.open(mainLink, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<div>
			<div className='relative z-10 h-full'>
				<div
					onClick={handleCardClick}
					role='button'
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							handleCardClick();
						}
					}}
					className='flex flex-col gap-2 cursor-pointer group w-full h-full'
					aria-label={`View ${project.name} project: ${project.description}`}
				>
					{/* Image Container */}
					<div className='relative w-full bg-muted rounded-[8px] border border-border h-[200px] md:h-[200px] sm:h-[170px] overflow-hidden select-none ring-1 ring-border/50 ring-offset-2 ring-offset-accent'>
						<NoiseBackground
							bgImage={project.bgImage}
							
							loading={index < 2 ? 'eager' : 'lazy'}
							priority={index < 2}
							containerClassName='absolute inset-0 h-full w-full flex items-center justify-center'
							className='w-full h-full flex items-center justify-center'
						>
							{/* Screenshot Container */}
							<div className='h-[80%]  flex justify-center items-center backdrop-blur-xs bg-white/5 group-hover:scale-110 ease-in-out transition-all duration-300 rounded-[9px] z-1 aspect-video relative p-[3px] overflow-hidden '>
								<div className='w-full h-full bg-background rounded-[6px] overflow-hidden relative'>
									<Image
										src={project.image}
										alt={`${project.name} screenshot`}
										fill
										className='object-cover  bg-background h-full w-full aspect-video'
										priority={index < 2}
									/>
								</div>
							</div>
						</NoiseBackground>
					</div>

					{/* Content */}
					<div className='px-2 flex flex-col gap-1 justify-between flex-1'>
						<div>
							<div className='flex items-center justify-between'>
								<h3 className='text-[1.10rem] leading-[1.10] text-foreground font-normal'>
									{project.name}
								</h3>
							</div>
							{project.description && (
								<p className='text-sm text-muted-foreground'>{project.description}</p>
							)}
						</div>

						<div className='flex items-center justify-between gap-3 select-none flex-wrap'>
							{hasUrl ? (
								<Link
									href={project.url!}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground'
									onClick={(e: React.MouseEvent) => e.stopPropagation()}
								>
									<p>View Live</p>
									<RightArrow />
								</Link>
							) : (
								<p className='text-sm text-muted-foreground'>Coming Soon</p>
							)}
							{hasGithub && (
								<Link
									href={project.github!}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground'
									onClick={(e: React.MouseEvent) => e.stopPropagation()}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='1em'
										height='1em'
										viewBox='0 0 24 24'
										className='text-muted-foreground size-5'
									>
										<g fill='none'>
											<path
												fill='gray'
												d='M12.002 1.3c-8.449-.007-13.738 9.134-9.52 16.455a10.98 10.98 0 0 0 6.051 4.937c.548.096.721-.226.721-.516c0-.262.006-.99 0-1.909c-3.054.663-3.684-1.446-3.684-1.446a2.9 2.9 0 0 0-1.218-1.605c-.997-.681.074-.668.074-.668a2.3 2.3 0 0 1 1.682 1.13a2.336 2.336 0 0 0 3.193.912a2.34 2.34 0 0 1 .697-1.462c-2.437-.278-5-1.22-5-5.426A4.25 4.25 0 0 1 6.13 8.756a3.94 3.94 0 0 1 .107-2.904c.404-.919.923-.295 3.017 1.126c1.8-.493 3.699-.493 5.498 0c2.1-1.42 3.015-1.126 3.015-1.126a3.94 3.94 0 0 1 .109 2.904a4.24 4.24 0 0 1 1.129 2.948c0 4.218-2.567 5.145-5.012 5.415c.532.534.805 1.272.751 2.023v3.039c0 .293.178.617.735.511c8.019-2.662 10.148-13.006 3.833-18.62a10.98 10.98 0 0 0-7.31-2.771'
											/>
											<path
												fill='#b2b2b2'
												d='M6.037 6.489a5 5 0 0 1 .2-.637c.273-.045.551-.026.816.056a10.9 10.9 0 0 1 9.9 0c.263-.082.542-.102.814-.057q.121.311.2.637a10.96 10.96 0 0 1 4.866 7.54C24.18 5.686 15.993-.985 8.096 2.02a10.975 10.975 0 0 0-6.933 12.007A10.96 10.96 0 0 1 6.037 6.49'
											/>
											<path
												stroke='#191919'
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12.002 1.3c-8.449-.007-13.738 9.134-9.52 16.455a10.98 10.98 0 0 0 6.051 4.937c.548.096.721-.226.721-.516c0-.262.006-.99 0-1.909c-3.054.663-3.684-1.446-3.684-1.446a2.9 2.9 0 0 0-1.218-1.605c-.997-.681.074-.668.074-.668a2.3 2.3 0 0 1 1.682 1.13a2.336 2.336 0 0 0 3.193.912a2.34 2.34 0 0 1 .697-1.462c-2.437-.278-5-1.22-5-5.426A4.25 4.25 0 0 1 6.13 8.756a3.94 3.94 0 0 1 .107-2.904c.404-.919.923-.295 3.017 1.126c1.8-.493 3.699-.493 5.498 0c2.1-1.42 3.015-1.126 3.015-1.126a3.94 3.94 0 0 1 .109 2.904a4.24 4.24 0 0 1 1.129 2.948c0 4.218-2.567 5.145-5.012 5.415c.532.534.805 1.272.751 2.023v3.039c0 .293.178.617.735.511c8.019-2.662 10.148-13.006 3.833-18.62a10.98 10.98 0 0 0-7.31-2.771'
											/>
										</g>
									</svg>
									<p className='sr-only'>GitHub</p>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='block sm:hidden'>
				<div
					className='w-full h-px'
					style={{
						backgroundImage:
							'repeating-linear-gradient(to right, hsl(var(--border)) 0px, hsl(var(--border)) 6px, transparent 6px, transparent 14px)',
						backgroundSize: '100% 1px',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
			</div>
		</div>
	);
}
