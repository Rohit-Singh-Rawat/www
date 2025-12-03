import { ExperienceItem } from '@/types';
import Heading from './heading';
interface ExperienceProps {
	experiences: ExperienceItem[];
	isLookingForJob?: boolean;
}

const Experience = ({ experiences, isLookingForJob = false }: ExperienceProps) => {
	return (
		<section
			className=' space-y-4 sm:space-y-6 lg:space-y-8 w-full'
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
				className='space-y-4 sm:space-y-6 '
				aria-label='Work experience timeline'
			>
				{experiences.map((exp, index) => (
					<li
						key={index}
						className='space-y-2 sm:space-y-3 lg:space-y-4 ml-2 pl-2  list-[lower-roman] marker:text-muted-foreground marker:text-xs'
					>
						<article>
							<header className='flex flex-col gap-y-1'>
								<h3 className='text-base text-foreground font-light font-bespoke'>{exp.name}</h3>

								<p className='text-sm text-muted-foreground'>
									{exp.designation} {','} {exp.time}
									{exp.isPresent && ' - Present'}
								</p>
							</header>
							<div className='space-y-1 sm:space-y-1.5 lg:space-y-2 mt-2'>
								{exp.description.map((line, lineIndex) => (
									<p
										key={lineIndex}
										className='text-sm text-muted-foreground leading-relaxed font-light'
									>
										{line}
									</p>
								))}
							</div>
						</article>
					</li>
				))}
			</ol>
		</section>
	);
};

export default Experience;
