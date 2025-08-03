import Heading from '@/components/home/heading';
import OgCard from '@/components/og-card';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
	title: 'Playground',
	description: 'Experiments & creative code',
});

export default function PlaygroundPage() {
	return (
		<div className='w-full py-8 flex-1'>
			<div className='space-y-6'>
				<Heading
					title='Playground'
					subtitle='Experiments & creative code'
				/>

				<div className='flex flex-col gap-4'>
					<Heading title='Og' />
					<OgCard />
				</div>
			</div>
		</div>
	);
}
