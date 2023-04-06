export default function Footer() {
	const current_date = new Date().getFullYear();
	return (
		<p className="text-[12px] text-center text-white mb-2 google-font">
			{current_date} Created by Miguel Camilo
		</p>
	);
}
