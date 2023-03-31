export default function QuizCard({
	data,
	length,
	questionId,
	handle_question,
    score
}) {
	return (
		<div className="mt-20 ml-3">
			<h2 className="text-white text-left text-4xl font-black font-mono mb-5">
				Random Quiz Game
			</h2>
			{/* quiz card container */}
			<div className="bg-white h-[38rem] w-[23rem] md:h-[40rem] md:w-[35rem] rounded-xl">
				<p className="text-start text-lg font-bold text-[#2F527B] pt-5 pl-5">
					Question {questionId + 1}/{length}                    
				</p>

                <p className="text-start text-lg font-bold text-[#2F527B] pt-5 pl-5">Correct Anwsers: {score}</p>

				{/* question container */}
				<div className="flex justify-center mt-16">
					<p className="text-[#2F527B] text-[24px] font-bold">
						{data[questionId].question}
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-5 mt-10">
					{data[questionId].options.map((results) => (
						<div key={results.id}>
							<button onClick={() => handle_question(results.isCorrect)} className="border-2 border-[#6066D0B2] hover:border-[#F9A826] duration-200 rounded-xl w-[400px] p-[1rem] hover:bg-[#F9A826] text-[#6066D0B2] hover:text-white font-bold">
								{results.answer}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
