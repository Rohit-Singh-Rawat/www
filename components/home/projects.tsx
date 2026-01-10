import Link from '@/components/ui/Link';
import ArrowUpRight, { RightArrow } from '../icons/arrow';
import Heading from './heading';
import { TextShimmer } from '../animated/text-shimmer';
interface ProjectItem {
	name: string;
	description: string;
	url?: string;
}

interface ProjectsProps {
	projects: ProjectItem[];
}

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<section
			className=' space-y-4 sm:space-y-6  w-full'
			aria-labelledby='projects-heading'
		>
			<div id='projects-heading'>
				<Link href='/projects'>
					<Heading title='Projects' />
				</Link>
			</div>
			<ul
				className='space-y-4 sm:space-y-5'
				role='list'
				aria-label='Featured projects'
			>
				{projects.map((project, index) => (
					<li key={index}>
						<article>
							<Link
								href={project.url || '#'}
								target='_blank'
								rel='noopener noreferrer'
								className='block space-y-1 rounded-md group   p'
								aria-label={`View ${project.name} project: ${project.description}`}
							>
								<h3 className='text-foreground font-normal flex items-center gap-x-1 text-sm sm:text-base'>
									{project.name}
									<ArrowUpRight
										className='w-3 h-3 sm:w-4 sm:h-4 opacity-0 ml-1 group-hover:opacity-100 transition-all duration-300 rotate-45 group-hover:rotate-0'
										aria-hidden='true'
									/>
								</h3>
								<p className='text-sm text-muted-foreground leading-relaxed font-light'>
									{project.description}
								</p>
							</Link>
						</article>
					</li>
				))}
			</ul>
			<footer className='mt-4 sm:mt-6'>
				<Link
					href='/projects'
					className='text-foreground  group text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm flex items-center gap-x-1'
					aria-label='View all projects'
				>
					<TextShimmer
						duration={2}
						spread={2}
					>
						View all projects
					</TextShimmer>
					{<RightArrow />}
				</Link>
			</footer>
		</section>
	);
};

export default Projects;
