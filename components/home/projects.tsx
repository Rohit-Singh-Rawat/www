import Link from 'next/link';
import ArrowUpRight from '../icons/arrow';
import Heading from './heading';
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
			className='mt-6 md:mt-8 space-y-2 w-full'
			aria-labelledby='projects-heading'
		>
			<div id='projects-heading'>
				<Heading title='Projects' />
			</div>
			<ul
				className='space-y-2'
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
								className='block space-y-1 rounded-md group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 -m-2'
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
			<footer className='mt-4 md:mt-6'>
				<p className='text-sm text-muted-foreground'>
					Find all fun at{' '}
					<Link
						href='https://rsrcraft.me'
						target='_blank'
						rel='noopener noreferrer'
						className='text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
						aria-label='Visit rsrcraft.me to see all projects'
					>
						rsrcraft.me
					</Link>
				</p>
			</footer>
		</section>
	);
};

export default Projects;
