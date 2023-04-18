import FeedbackButton from '../FeedbackButton/FeedbackButton';
import { UserAuth } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';

export default function QuizResult({ length, score, handle_reset }) {
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
			<div className="mt-20">
				<div className='absolute bottom-0 right-0 m-[1rem]'>
					<FeedbackButton />
				</div>
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
				<h2 className="text-white text-left  text-xl sm:text-4xl font-black google-font mb-5">
					Random Quiz Game
				</h2>
				{/* quiz card container */}
				<div className="bg-white h-[38rem] w-[23rem] md:h-[40rem] md:w-[35rem] rounded-xl">
					{/* results container */}
					<div className="flex justify-center">
						<img
							src="/src/assets/undraw_winners_ao2o 2.svg"
							alt="cartoon people jumping in celebration"
							className="mt-8"
						/>
					</div>
					{/* text container */}
					<div className="text-center space-y-5">
						<h3 className="font-bold text-[#1D355D] text-[40px] mt-20 google-font">
							Results
						</h3>
						<p className="text-xl font-thin">
							You got{' '}
							<i
								className={`font-semibold google-font ${
									score > length / 2 ? `text-green-500` : `text-red-600`
								}`}
							>
								{Math.floor(score)}
							</i>{' '}
							correct anwser out of
							<i
								className={`font-semibold google-font ${
									score > length / 2 ? `text-green-500` : `text-red-600`
								}`}
							>
								{length}!
							</i>
						</p>
					</div>

					{/* try again button */}
					<button onClick={handle_reset} className="text-center">
						<div className="ml-[6.2rem] mt-[5rem] sm:ml-[145px] sm:mt-[7rem] w-[80%] sm:w-[100%] p-5 border-2 border-[#6066D0B2] rounded-xl hover:bg-[#F9A826] hover:border-[#F9A826] hover:text-white text-[#6066D0B2] font-bold">
							Try Again
						</div>
					</button>
				</div>
			</div>
		</>
	);
}
