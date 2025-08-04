import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpRight from '@/components/icons/arrow';

export default async function Spotify() {
	let nowPlayingData = await getNowPlaying();

	if (typeof nowPlayingData === 'string') {
		const recentlyPlayedData = await getRecentlyPlayed();

		if (
			typeof recentlyPlayedData !== 'string' &&
			recentlyPlayedData.tracks.length > 0
		) {
			const song = recentlyPlayedData.tracks[0];
			return (
				<aside
					className='flex flex-col w-full  -space-y-1'
					aria-labelledby='recent-music'
				>
					<h3
						id='recent-music'
						className='sr-only'
					>
						Recently played music
					</h3>
					<article className='flex gap-x-2 p-1 bg-accent border border-border/50 shadow-inner shadow-black/20 rounded-md w-full items-end z-10'>
						<figure className='relative w-[50px] h-[50px] flex-shrink-0'>
							<Image
								alt={`Album cover for ${song.title} by ${song.artist}`}
								width={50}
								height={50}
								className='rounded-sm object-cover z-10 relative'
								src={song.albumImageUrl}
							/>
							<div
								className='absolute -right-4 top-1/2 -translate-y-1/2 w-[45px] h-[45px] bg-gradient-to-br from-muted via-muted-foreground/50 to-border rounded-full shadow-lg opacity-80 z-0'
								aria-hidden='true'
							>
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent'></div>
							</div>
						</figure>
						<div className='flex flex-col overflow-hidden w-full ml-4'>
							<Link
								href={song.songUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
								aria-label={`Listen to ${song.title} by ${song.artist} on Spotify`}
							>
								<p className='truncate text-foreground group-hover:underline'>
									{song.title}
								</p>
								<ArrowUpRight
									className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity'
									aria-hidden='true'
								/>
							</Link>
							<p
								className='truncate text-muted-foreground font-light'
								aria-label={`Artist: ${song.artist}`}
							>
								{song.artist}
							</p>
						</div>
					</article>
					<footer className='flex flex-row gap-x-1.5 items-center pl-1 border border-border/50 shadow-inner shadow-black/20 rounded-md mx-1 py-0.5 pt-1.5 animate-in slide-in-from-top-2 duration-300 delay-500'>
						<span
							className='relative flex h-2 w-2'
							aria-hidden='true'
						>
							<span className='relative inline-flex rounded-full h-2 w-2 bg-muted-foreground/30'></span>
						</span>
						<div className='text-xs text-muted-foreground/50'>
							Last played recently at{' '}
							<time dateTime={song.playedAt}>
								{new Date(song.playedAt).toLocaleString('en-IN', {
									timeZone: 'Asia/Kolkata',
									hour: '2-digit',
									minute: '2-digit',
									day: '2-digit',
									month: 'short',
								})}{' '}
								IST
							</time>
						</div>
					</footer>
				</aside>
			);
		} else {
			return (
				<aside
					className='flex flex-col w-full my-10 p-4 text-center text-muted-foreground border border-border/50 rounded-md'
					role='status'
					aria-live='polite'
				>
					🎶 No tracks available right now. 🎶
				</aside>
			);
		}
	}

	const { artist, songUrl, title, albumImageUrl, isPlaying } = nowPlayingData;

	return (
		<aside
			className='flex flex-col w-full  -space-y-1'
			aria-labelledby='current-music'
		>
			<h3
				id='current-music'
				className='sr-only'
			>
				Currently playing music
			</h3>
			<article className='flex gap-x-2 p-1 bg-accent border border-border/50 shadow-inner shadow-black/20 rounded-md w-full items-end z-10'>
				<figure className='relative w-[50px] h-[50px] flex-shrink-0'>
					<Image
						alt={`Album cover for ${title} by ${artist}`}
						width={50}
						height={50}
						className='rounded-sm object-cover z-10 relative'
						src={albumImageUrl}
					/>
					<div
						className={`absolute -right-4 top-1/2 -translate-y-1/2 w-[45px] h-[45px] bg-gradient-to-br from-muted via-muted-foreground/50 to-border rounded-full shadow-lg opacity-80 z-0 ${
							isPlaying ? 'animate-spin duration-100' : ''
						}`}
						aria-hidden='true'
					>
						<div className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent'></div>
					</div>
				</figure>
				<div className='flex flex-col overflow-hidden w-full ml-4'>
					<Link
						href={songUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
						aria-label={`Listen to ${title} by ${artist} on Spotify`}
					>
						<p className='truncate text-foreground group-hover:underline'>
							{title}
						</p>
						<ArrowUpRight
							className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity'
							aria-hidden='true'
						/>
					</Link>
					<p
						className='truncate text-muted-foreground font-light'
						aria-label={`Artist: ${artist}`}
					>
						{artist}
					</p>
				</div>
			</article>
			<footer className='flex flex-row gap-x-1.5 items-center pl-1 border border-border/50 shadow-inner shadow-black/20 rounded-md mx-1 py-0.5 pt-1.5 animate-in slide-in-from-top-2 duration-300 delay-500'>
				<span
					className='relative flex h-2 w-2'
					aria-hidden='true'
				>
					<span
						className={`relative inline-flex rounded-full h-2 w-2 ${
							isPlaying
								? 'bg-green-500 animate-pulse'
								: 'bg-muted-foreground/30'
						}`}
					></span>
				</span>
				<div
					className='text-xs text-muted-foreground/50'
					role='status'
					aria-live='polite'
				>
					{isPlaying ? 'Now playing' : 'Not playing'}
				</div>
			</footer>
		</aside>
	);
}
