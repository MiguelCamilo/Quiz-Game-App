import { useState } from "react";

import QuizCard from "../QuizCard/QuizCard";
import QuizResult from "../QuizResult/QuizResult";
import Footer from "../QuizCard/Footer";
import Login from "../../pages/Login";

import { data } from "../../data/quiz_data";

export default function Quiz() {
    const [questionId, setQuestionId] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const length = data.length

    const handle_question = (isCorrect) => {
    // console.log({isCorrect})
    if(isCorrect === true) setScore(score + 1)
    const newQuestionId = questionId + 1

    newQuestionId < length
    ? setQuestionId(newQuestionId)
    : setShowScore(true)

    }

    const handle_reset = () => {
        setScore(0)
        setShowScore(false)
        setQuestionId(0)
    }

	return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
        {showScore
            ?<QuizResult 
                length={length}
                score={score}
                handle_reset={handle_reset}
            />
            : <QuizCard 
                data={data}
                length={length}
                questionId={questionId}
                handle_question={handle_question}
                score={score}
                setQuestionId={setQuestionId}
                setShowScore={setShowScore}
            />
        }
  
        <div className="flex-grow"></div>

        <div className="mt-auto"> 
          <Footer />
        </div>
      </div>


	);
}
