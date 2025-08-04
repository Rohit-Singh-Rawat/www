import { ExperienceItem } from '@/types';
import Heading from './heading';
interface ExperienceProps {
	experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
	return (
		<section
			className=' space-y-4 sm:space-y-6 lg:space-y-8 w-full'
			aria-labelledby='experience-heading'
		>
			<div id='experience-heading'>
				<Heading title='Experience' />
			</div>
			<ol
				className='space-y-4 sm:space-y-6 lg:space-y-8'
				aria-label='Work experience timeline'
			>
				{experiences.map((exp, index) => (
					<li
						key={index}
						className='space-y-2 sm:space-y-3 lg:space-y-4'
					>
						<article>
							<header className='flex flex-col sm:flex-row sm:items-baseline sm:justify-start gap-x-0 sm:gap-x-2 gap-y-1 sm:gap-y-0'>
								<h3 className='text-sm sm:text-base text-foreground font-normal'>
									{exp.name}
								</h3>
								<time className='text-xs sm:text-xs lg:text-sm text-muted-foreground'>
									{exp.time}
									{exp.isPresent && ' - Present'}
								</time>
							</header>
							<div className='space-y-1 sm:space-y-1.5 lg:space-y-2'>
								{exp.description.map((line, lineIndex) => (
									<p
										key={lineIndex}
										className='text-sm lg:text-base text-muted-foreground leading-relaxed sm:leading-relaxed lg:leading-relaxed font-light'
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
