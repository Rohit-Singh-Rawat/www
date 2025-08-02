import Link from 'next/link';

type Props = {};
const Header = (props: Props) => {
	return (
		<div className='flex items-center justify-between w-full'>
			<div>
				<h1 className='text-lg font-medium'>Rohit Singh Rawat</h1>
				<p className='text-sm text-muted-foreground'>Software Engineer</p>
			</div>
			<div className='flex flex-row gap-4'>
				<Link
					href='/'
					className='text-sm hover:text-muted-foreground'
				>
					Home
				</Link>
				<Link
					href='/blogs'
					className='text-sm hover:text-muted-foreground'
				>
					Blogs
				</Link>
			</div>
		</div>
	);
};
export default Header;
