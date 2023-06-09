import LogOutBtn from '../LogoutBtn/LogOutBtn';
import { UserAuth } from '../../context/AuthContext';

export default function QuizCard({
	data,
	length,
	questionId,
	handle_question,
	setQuestionId,
	setShowScore,
}) {
	const { user } = UserAuth();

	const skip_question = () => {
		const next_question = questionId + 1;
		next_question < length ? setQuestionId(next_question) : setShowScore(true);
	};

	const back_button = () => {
		const back_question = questionId - 1;
		setQuestionId(back_question);
	};

	return (
		<div className="mt-16">
			{/* user name */}
			<div className="flex flex-col absolute top-0 left-0 m-[1rem]">
				<p className="google-font text-sm text-white text-center hidden md:block">
					Welcome!
				</p>
				<p className="google-font text-sm text-white">{user?.displayName}</p>
			</div>
			{/* log out btn */}
			<LogOutBtn />
			<h2 className="text-white text-center text-xl sm:text-4xl font-black google-font mb-5">
				Random Quiz Game
			</h2>

			{/* quiz card container */}
			<div className="flex flex-grow flex-col bg-white rounded-2xl px-[1rem] py-[2rem] sm:px-6">
				{/* top portion container */}
				<div className="flex space-x-[2rem] sm:space-x-[14rem]">
					<p className="text-start text-[16px] google-font font-bold text-[#2F527B] pt-8 pl-5">
						Question {questionId + 1} of {length}
					</p>

					{/* button container */}
					<div className="group mt-6 sm:mt-5">
						<button
							onClick={skip_question}
							className="w-full transition-all duration-150 bg-red-700 font-bold text-white border-b-8 border-b-red-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-red-700 group-hover:border-t-red-700 group-hover:shadow-lg"
						>
							<div className="p-2 px-3 duration-150 bg-red-500 rounded-lg group-hover:bg-red-700 google-font text-[10px]">
								Skip
							</div>
						</button>
					</div>
				</div>

				{/* question container */}
				<div className="flex justify-center mt-8">
					<p className="text-[#2F527B] text-center text-[18px] sm:text-[13px] google-font font-bold ">
						{data[questionId].question}
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-5 mt-5">
					{data[questionId].options.map((results, index) => (
						<div key={index}>
							<button
								onClick={() => handle_question(results.isCorrect)}
								className="bg-white border-2 border-[#6066D0B2] hover:border-[#F9A826] duration-200 rounded-xl w-[250px] sm:w-[400px] p-[1rem] hover:bg-[#F9A826] text-[#6066D0B2] hover:text-white font-bold google-font"
							>
								{results.answer}
							</button>
						</div>
					))}
				</div>
				{questionId > 0 ? (
					<div className="group mt-5">
						<button
							onClick={back_button}
							className="rm-hover w-[80%] ml-8 sm:ml-[3.5rem] transition-all duration-150 bg-yellow-700 font-bold text-white border-b-8 border-b-yellow-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-yellow-700 group-hover:border-t-yellow-700 group-hover:shadow-lg"
						>
							<div className="p-2 px-4 duration-150 bg-yellow-500 rounded-lg group-hover:bg-yellow-700 google-font">
								Back
							</div>
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
}
