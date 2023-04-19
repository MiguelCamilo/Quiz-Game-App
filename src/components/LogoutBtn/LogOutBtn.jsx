import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LogOutBtn() {
	const { googleSignOut } = UserAuth();

	const navigate = useNavigate();
	const handleSignOut = async () => {
		try {
			await googleSignOut();
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			{/* log out btn */}
			<div className="group absolute top-0 right-0 m-[1rem]">
				<button
					onClick={handleSignOut}
					className="w-20% transition-all duration-150 bg-red-700 font-bold text-white border-b-8 border-b-red-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-red-700 group-hover:border-t-red-700 group-hover:shadow-lg"
				>
					<div className="p-2 px-3 duration-150 bg-red-500 rounded-lg group-hover:bg-red-700 google-font text-[10px]">
						Logout
					</div>
				</button>
			</div>
		</>
	);
}
