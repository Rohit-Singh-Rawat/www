import { projectData } from '@/constant/wwwData';
import Heading from '@/components/home/heading';
import { generateMetadata } from '@/lib/seo';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata = generateMetadata({
	title: 'Projects',
	description: 'All my projects',
});

export default function ProjectsPage() {
	return (
		<section
			className='space-y-6 w-full py-20'
			aria-labelledby='projects-heading'
		>
			<Heading title='Projects' />

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
				{projectData.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						index={index}
					/>
				))}
			</div>
		</section>
	);
}
