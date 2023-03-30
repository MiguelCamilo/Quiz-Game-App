import { data } from "../../data/quiz_data";

export default function QuizCard() {
	return (
		<>
			<h2 className="text-white text-4xl font-black font-mono mr-[10rem] md:mr-[13rem] mb-5">Random Quiz Game</h2>
			{/* quiz card container */}
			<div className="bg-white h-[38rem] w-[23rem] md:h-[40rem] md:w-[35rem] rounded-xl">
                {/* questions map */}
            </div>
		</>
	);
}

// {!data 
//     ? <p>Loading...</p>
//     : data.map((element) => (
//         <p>{element.question}</p>
//     ))
// }