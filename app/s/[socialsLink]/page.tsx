import { redirect } from 'next/navigation';
import { linksData } from '@/constant/wwwData';

export async function generateStaticParams() {
	return linksData.map((link) => ({
		socialsLink: link.slug,
	}));
}
export default async function SocialsRedirect({
	params,
}: {
	params: Promise<{ socialsLink: string }>;
}) {
	const { socialsLink } = await params;
	const link = linksData.find((link) => link.slug === socialsLink);

	if (link) {
		redirect(link.url);
	}

	redirect('/');
}
