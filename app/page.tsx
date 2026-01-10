import Intro from '@/components/home/intro';
import { experienceData, projectData, linksData } from '@/constant/wwwData';
import Experience from '@/components/home/experience';
import Spotify from '@/components/home/spotify';
import Projects from '@/components/home/projects';
import Links from '@/components/home/Links';

const page = () => {
	return (
		<>
			<Intro />
			<Spotify />
			<Experience
				experiences={experienceData}
				isLookingForJob={true}
			/>
			<Projects projects={projectData.slice(0, 3)} />
			<Links links={linksData} />
		</>
	);
};
export default page;
