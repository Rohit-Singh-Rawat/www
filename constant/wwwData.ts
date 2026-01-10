import { ExperienceItem, ProjectItem } from '@/types';
import leadllyLogo from '@/public/images/experience/leadlly.svg';
import linkverseLogo from '@/public/images/experience/linkverselabs.svg';
import gbrailLogo from '@/public/images/experience/gbrail.svg';
import eveBg from '@/public/images/bg/eve.jpg';
import natureBg from '@/public/images/bg/nature.png';
import skyBg from '@/public/images/bg/sky.jpg';
import planeBg from '@/public/images/bg/plane.jpg';
import lightingBg from '@/public/images/bg/lighting.jpg';
import himalayaBg from '@/public/images/bg/himalaya.jpg';
import sunsetBg from '@/public/images/bg/sunset.jpg';
import oceanBg from '@/public/images/bg/ocean.jpg';
import env0Image from '@/public/images/projects/env0.png';
import pixlrImage from '@/public/images/projects/pixlr.png';
import echoImage from '@/public/images/projects/echo.png';
import buttonsImage from '@/public/images/projects/buttons.png';
import oggenImage from '@/public/images/projects/oggen.png';
import craftsImage from '@/public/images/projects/crafts.png';
import hikariImage from '@/public/images/projects/hikari.png';
import fitflowImage from '@/public/images/projects/fit-flow.png';

export const experienceData: ExperienceItem[] = [
	{
		name: 'Freelance',
		designation: 'Full Stack Engineer',
		time: 'May 2025',
		isPresent: true,
		description: [
			'Designed and engineered an LMS platform for railway training, featuring role-based dashboards, progress tracking, and course management.',
		],
		logo: gbrailLogo,
	},
	{
		name: 'Linkverse Labs',
		designation: 'Software Engineer',
		time: 'May 2025 - Sep 2025',
		isPresent: false,
		description: [
			'Designed and developed full-stack applications using Next.js, Supabase, and Vercel AI SDK from ground up to production deployment.',
			'Architected REST APIs, implemented database schemas, and managed cloud infrastructure for seamless scalability and performance.',
		],
		logo: linkverseLogo,
	},
	{
		name: 'Leadlly',

		designation: 'Full Stack Intern',
		time: 'June 2024 – October 2024',
		isPresent: false,
		logo: leadllyLogo,
		description: [
			'Full Stack Intern responsible for building responsive landing pages and crafting modern, user-friendly frontend interfaces.',
			'Developed robust REST APIs, implemented database integrations, and contributed to cross-platform mobile application development.',
		],
	},
];
export const projectData: ProjectItem[] = [
	{
		name: 'Envval (Ongoing)',
		description: 'Manage your environmental secrets with ease',
		tech: [],
		github: 'https://github.com/Rohit-Singh-Rawat/Envval',
		url: '',
		time: '',
		bgImage: eveBg,
		image: env0Image,
	},
	{
		name: 'Pixlr Chat',
		description: 'Multi modal AI chat app with AI agents',
		tech: ['Nextjs', 'Express', 'Prisma', 'PostgreSQL', 'WebSockets', 'TailwindCSS', 'AWS'],
		github: '',
		url: 'https://pixlr.chat/',
		time: 'Nov 2024 - Dec 2024',
		bgImage: himalayaBg,
		image: pixlrImage,
	},
	{
		name: 'Echo Chat',
		description: 'Real-time chat app for creating temporary chat rooms',
		tech: ['Nextjs', 'Express', 'Prisma', 'PostgreSQL', 'WebSockets', 'TailwindCSS', 'AWS'],
		github: 'https://github.com/Rohit-Singh-Rawat/Echo-Chat',
		url: 'https://echo.rsrcraft.me',
		time: 'Nov 2024 - Dec 2024',
		bgImage: planeBg,
		image: echoImage,
	},
	{
		name: 'UI Craft',
		description: 'Showcase of reusable UI components for web apps',
		tech: [],
		github: 'https://github.com/Rohit-Singh-Rawat/Craft-Diary',
		url: 'https://craft.rohitsinghrawat.com/',
		time: '',
		bgImage: skyBg,
		image: craftsImage,
	},
	{
		name: 'OGgen',
		description:
			'OpenGraph Image Generator - A simple and efficient OpenGraph image generator built with Next.js. Create social media preview images for your content with ease.',
		tech: [],
		github: 'https://github.com/Rohit-Singh-Rawat/OGgen',
		url: 'https://oggen.rsrcraft.me/',
		time: '',
		bgImage: sunsetBg,
		image: oggenImage,
	},
	{
		name: 'Buttons',
		description: 'A collection of buttons for web apps',
		tech: [],
		github: 'https://github.com/Rohit-Singh-Rawat/Buttons',
		url: 'https://buttons.rsrcraft.me/',
		time: '',
		bgImage: lightingBg,
		image: buttonsImage,
	},
	{
		name: 'FitFlow',
		description: 'StackOverFlow for Gym rat',
		tech: ['Nextjs', 'Prisma', 'PostgreSQL', 'Tailwind', 'TailwindCSS', 'Shadcn UI'],
		github: 'https://github.com/Rohit-Singh-Rawat/Fit-Flow',
		url: 'https://fit-flow-live.vercel.app/',
		time: 'Jun 2024 - July 2024',
		bgImage: oceanBg,
		image: fitflowImage,
	},
	{
		name: 'Hikari',
		description:
			'A minimal web application designed for users to create, manage, and share their personal stories and blogs with ease.',
		tech: ['React', 'Prisma', 'PostgreSQL', 'Tailwind', 'TailwindCSS', 'Cloudflare Workers'],
		github: 'https://github.com/Rohit-Singh-Rawat/Hikari',
		url: 'https://hikari-zeta.vercel.app/',
		time: 'May 2024',
		bgImage: natureBg,
		image: hikariImage,
	},
];
export const links = {
	email: {
		name: 'Email',
		slug: 'email',
		url: 'mailto:rohitzrawat2003@gmail.com',
		external: true,
	},
	x: {
		name: 'X ',
		slug: 'x',
		url: 'https://x.com/Spacing_Whale',
		external: true,
	},
	github: {
		name: 'GitHub',
		slug: 'github',
		url: 'https://github.com/Rohit-Singh-Rawat',
		external: true,
	},
	cv: {
		name: 'CV',
		slug: 'cv',
		url: 'https://drive.google.com/file/d/1IV8292q0tqiTsEC_pmB3HczUhlpdkKRP/view',
		external: true,
	},
	linkedin: {
		name: 'LinkedIn',
		slug: 'linkedin',
		url: 'https://www.linkedin.com/in/rohit-singh-rawat-space/',
		external: true,
	},
	telegram: {
		name: 'Telegram',
		slug: 'telegram',
		url: 'https://t.me/R_S_Rohit_0',
		external: true,
	},
	discord: {
		name: 'Discord',
		slug: 'discord',
		url: 'https://discord.com/users/_r_s_r_',
		external: true,
	},
};

export const linksData = Object.values(links);
