import Intro from '@/components/home/intro';
import { experienceData, projectData, linksData } from '@/constant/wwwData';
import Experience from '@/components/home/experience';
import Spotify from '@/components/home/spotify';
import Projects from '@/components/home/projects';
import Links from '@/components/home/Links';

const page = () => {
	return (
		<section
			aria-label='Portfolio sections'
			className='space-y-6 sm:space-y-8 lg:space-y-10'
		>
			<Intro />
			<Spotify />
			<Experience experiences={experienceData} />
			<Projects projects={projectData} />
			<Links links={linksData} />
		</section>
	);
};
export default page;
