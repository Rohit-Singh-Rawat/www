import Intro from '@/components/home/intro';
import { experienceData, projectData ,linksData} from '@/constant/wwwData';
import Experience from '@/components/home/experience';
import Spotify from '@/components/home/spotify';
import Projects from '@/components/home/projects';
import Links from '@/components/home/Links';

const page = () => {
	return (
		<>
			<Intro />
			<Spotify />
			<Experience experiences={experienceData} />
			<Projects projects={projectData} />
			<Links links={linksData} />
		</>
	);
};
export default page;
