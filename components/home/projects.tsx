import Link from 'next/link';
import ArrowUpRight from '../icons/arrow';
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
		<div className='mt-6 md:mt-8 space-y-2 w-full'>
			<h2 className='text-base sm:text-lg font-medium'>Projects</h2>
			{projects.map((project, index) => (
				<Link
					key={index}
					href={project.url || '#'}
					target='_blank'
					rel='noopener noreferrer'
					className='block space-y-1 rounded-md group'
				>
					<h3 className='text-foreground font-normal flex items-center gap-x-1 text-sm sm:text-base'>
						{project.name}
						<ArrowUpRight className='w-3 h-3 sm:w-4 sm:h-4 opacity-0 ml-1 group-hover:opacity-100 transition-all duration-300 rotate-45 group-hover:rotate-0' />
					</h3>
					<p className='text-sm text-muted-foreground leading-relaxed font-light'>
						{project.description}
					</p>
				</Link>
			))}
			<div className='mt-4 md:mt-6'>
				<p className='text-sm text-muted-foreground'>
					Find all fun at{' '}
					<Link
						href='https://rsrcraft.me'
						target='_blank'
						rel='noopener noreferrer'
						className='text-foreground hover:underline'
					>
						rsrcraft.me
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Projects;
