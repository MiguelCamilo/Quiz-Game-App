export default function QuizResult({ length, score, handle_reset }) {
	return (
		<div className="mt-20 ml-3">
			<h2 className="text-white text-left text-4xl font-black font-mono mb-5">
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
					<h3 className="font-bold text-[#1D355D] text-[55px] mt-20">
						Results
					</h3>
					<p className="text-xl font-thin">
						You got <i className="font-semibold">{score}</i> correct anwsers out
						of <i className="font-semibold">{length} !</i>
					</p>
				</div>

				{/* try again button */}
				<button onClick={handle_reset} className="text-center">
					<div className="ml-[10rem] mt-[10rem] w-[100%] p-5 border-2 border-[#6066D0B2] rounded-xl hover:bg-[#F9A826] hover:border-[#F9A826] hover:text-white text-[#6066D0B2] font-bold">
						Try Again
					</div>
				</button>
			</div>
		</div>
	);
}
