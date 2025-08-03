import Link from 'next/link';

type Props = {};
const Header = (props: Props) => {
	return (
		<header
			className='flex items-center justify-between w-full'
			role='banner'
		>
			<div>
				<h1 className='text-lg font-medium'>Rohit Singh Rawat</h1>
				<p
					className='text-sm text-muted-foreground'
					role='doc-subtitle'
				>
					Software Engineer
				</p>
			</div>
			<nav
				className='flex flex-row gap-4'
				role='navigation'
				aria-label='Main navigation'
			>
				<Link
					href='/'
					className='text-sm hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
					aria-label='Go to home page'
				>
					Home
				</Link>
				<Link
					href='/blogs'
					className='text-sm hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
					aria-label='Go to blogs page'
				>
					Blogs
				</Link>
			</nav>
		</header>
	);
};
export default Header;
