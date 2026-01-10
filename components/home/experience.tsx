import { ExperienceItem } from '@/types';
import Heading from './heading';
import Image from 'next/image';
interface ExperienceProps {
	experiences: ExperienceItem[];
	isLookingForJob?: boolean;
}

const Experience = ({ experiences, isLookingForJob = false }: ExperienceProps) => {
	return (
		<section
			className=' space-y-4 sm:space-y-6 w-full'
			aria-labelledby='experience-heading'
		>
			<div
				id='experience-heading'
				className='flex items-baseline gap-2'
			>
				<div className='flex items-start justify-start w-fit gap-2'>
					<Heading title='Experience' />
				</div>
				{isLookingForJob && (
					<span className='text-xs text-muted-foreground'>(Open to opportunities)</span>
				)}
			</div>
			<ol
				className='space-y-4 sm:space-y-5'
				aria-label='Work experience timeline'
			>
				{experiences.map((exp, index) => (
					<li
						key={index}
						className='space-y-2 sm:space-y-3 lg:space-y-4 '
					>
						<article className='flex gap-3'>
							<div className='flex-1'>
								<div className='flex items-center gap-2'>
									{exp.logo && (
										<div className='flex-shrink-0 border border-border/60 rounded-md border-0.5  p-0.5'>
											<div className='size-8 rounded-sm bg-secondary/90 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_2px_rgba(0,0,0,0.1),inset_2px_0_4px_rgba(0,0,0,0.1),inset_-2px_0_4px_rgba(0,0,0,0.1)]'>
												<Image
													src={exp.logo}
													alt={`${exp.name} logo`}
													width={24}
													height={24}
													className='rounded-sm object-contain'
												/>
											</div>
										</div>
									)}
									<header className='flex flex-col '>
										<h3 className='text-base text-foreground font-light font-bespoke'>
											{exp.name}
										</h3>

										<p className='text-sm text-muted-foreground'>
											{exp.designation} {','} {exp.time}
											{exp.isPresent && ' - Present'}
										</p>
									</header>
								</div>
								<ol className='space-y-1 sm:space-y-1.5 lg:space-y-2 mt-2 '>
									{exp.description.map((line, lineIndex) => (
										<li
											key={lineIndex}
											className='text-sm text-muted-foreground leading-relaxed font-light list-[lower-roman] p-1 mx-3 marker:text-muted-foreground marker:text-sm'
										>
											{line}
										</li>
									))}
								</ol>
							</div>
						</article>
					</li>
				))}
			</ol>
		</section>
	);
};

export default Experience;
