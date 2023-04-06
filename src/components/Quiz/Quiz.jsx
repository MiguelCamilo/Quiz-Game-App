import { useState } from "react";

import QuizCard from "../QuizCard/QuizCard";
import QuizResult from "../QuizResult/QuizResult";
import Footer from "../QuizCard/Footer";
import Login from "../../pages/Login";

import { data } from "../../data/quiz_data";

export default function Quiz() {
	const [questionId, setQuestionId] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const length = data.length;

	const handle_question = (isCorrect) => {
		// console.log({isCorrect})
		if (isCorrect === true) setScore(score + 1);
		const newQuestionId = questionId + 1;

		newQuestionId < length ? setQuestionId(newQuestionId) : setShowScore(true);
	};

	const handle_reset = () => {
		setScore(0);
		setShowScore(false);
		setQuestionId(0);
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen">
			<button
				// onClick={skip_question}
				className="w-[10%] transition-all duration-150 bg-red-700 font-bold text-white border-b-8 border-b-red-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-red-700 group-hover:border-t-red-700 group-hover:shadow-lg"
			>
				<div className="p-2 px-3 duration-150 bg-red-500 rounded-lg group-hover:bg-red-700 google-font text-[10px]">
					Skip
				</div>
			</button>

			{showScore ? (
				<QuizResult length={length} score={score} handle_reset={handle_reset} />
			) : (
				<QuizCard
					data={data}
					length={length}
					questionId={questionId}
					handle_question={handle_question}
					score={score}
					setQuestionId={setQuestionId}
					setShowScore={setShowScore}
				/>
			)}

			<div className="flex-grow"></div>

			<div className="mt-auto">
				<Footer />
			</div>
		</div>
	);
}
