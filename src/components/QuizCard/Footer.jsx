export default function Footer() {
	const current_date = new Date().getFullYear();
	return (
		<p className="font-mono text-md text-white mb-2">
			{current_date} Created by Miguel Camilo
		</p>
	);
}
