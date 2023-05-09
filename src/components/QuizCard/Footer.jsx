export default function Footer() {
	const current_date = new Date().getFullYear();
	return (
		<p className="text-[12px] text-center text-white mb-2 google-font">
			{current_date} See more at: {' '}
			<a href="https://miguelcamilo.dev" target="_blank">
				<span className="text-[#FF9800]">Miguel Camilo</span>
			</a>
		</p>
	);
}
