import "../App.css";

import Footer from "../components/QuizCard/Footer";

export default function Login() {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen bg-img">
			{/* login card container */}
			<div className="mt-auto bg-white h-[15rem] w-[23rem] rounded-lg">               
            <h2 className="flex justify-center">Gello</h2> 
				{/* form container */}
				<form
					action=""
					className="flex flex-col justify-center items-center h-[15rem]"
				>
					<input
						type="email"
						className="border-2 border-gray-300 rounded-md mb-2 p-2 w-[90%]"
						placeholder="Email"
					/>
					<input
						type="password"
						className="border-2 border-gray-300 rounded-md p-2 w-[90%]"
						placeholder="Password"
					/>
					{/* button */}
                    <div className="group mt-2 mr-8">
						<button							
							className="rm-hover ml-8 sm:ml-[3.5rem] transition-all duration-150 bg-red-600 font-bold text-white border-b-8 border-b-red-600 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-red-600 group-hover:border-t-red-600 group-hover:shadow-lg"
						>
							<div className="p-2 px-[9.2rem] duration-150 bg-red-500 rounded-lg group-hover:bg-red-600">
								Play
							</div>
						</button>
					</div>
				</form>
			</div>
			<div className="mt-auto">
				<Footer />
			</div>
		</div>
	);
}
