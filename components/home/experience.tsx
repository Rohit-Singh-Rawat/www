import { ExperienceItem } from '@/types';

interface ExperienceProps {
	experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
	return (
		<div className='mt-6 sm:mt-8 lg:mt-10 space-y-4 sm:space-y-6 lg:space-y-8 w-full'>
			<h2 className='text-base sm:text-lg lg:text-xl font-medium'>
				Experience
			</h2>
			{experiences.map((exp, index) => (
				<div
					key={index}
					className='space-y-2 sm:space-y-3 lg:space-y-4'
				>
					<div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-start gap-x-0 sm:gap-x-2 gap-y-1 sm:gap-y-0'>
						<h3 className='text-sm sm:text-base  text-foreground font-normal'>
							{exp.name}
						</h3>
						<span className='text-xs sm:text-xs lg:text-sm text-muted-foreground'>
							{exp.time}
							{exp.isPresent && ' - Present'}
						</span>
					</div>
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
				</div>
			))}
		</div>
	);
};

export default Experience;
