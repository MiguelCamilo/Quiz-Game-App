import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/QuizCard/Footer";
import FeedbackButton from "../components/FeedbackButton/FeedbackButton";

// firebase auth
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "../App.css";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSignIn = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then (
                navigate("/quiz")
            )
            .catch(err => console.error(err))
    }
	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen bg-img">
			<h2 className="text-xl sm:text-xl text-center font-normal google-font text-white mt-[10rem] -mb-[10rem] sm:-mb-[8rem] sm:mt-[10rem]">
				Random Quiz Game!
			</h2>
			{/* login card container */}
			<div className="mt-auto bg-white h-[24rem] w-[23rem] rounded-lg">
				<h4 className="text-center google-font text-gray-700 mt-7 mb-4">
					Sign up!
				</h4>
				{/* form container */}
				<form className="flex flex-col justify-center items-center h-[15rem]">
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						className="border-2 border-gray-300 rounded-md mb-2 p-2 w-[90%]"
						placeholder="Email"
						required
					/>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						className="border-2 border-gray-300 rounded-md p-2 w-[90%]"
						placeholder="Password"
						required
					/>
					{/* button */}
					<div className="group mt-2 mr-8 sm:mr-14">
						<button type="submit" onClick={handleSignIn} className="rm-hover ml-8 sm:ml-[3.5rem] transition-all duration-150 bg-orange-600 font-bold text-white border-b-8 border-b-orange-600 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-orange-600 group-hover:border-t-orange-600 group-hover:shadow-lg">
							<div className="p-2 px-[8.5rem] duration-150 bg-orange-500 rounded-lg group-hover:bg-orange-600 google-font">
								Play
							</div>
						</button>
					</div>
				</form>

				<div className="text-center">
					<p className="text-[10px] google-font">Already have an account?</p>
					<Link to="/" className="text-blue-600 text-[13px] google-font">
						Log in here
					</Link>
				</div>
			</div>
			<div className="mt-auto">
				<div className="mb-5">
					<FeedbackButton />
				</div>
				<Footer />
			</div>
		</div>
	);
}
