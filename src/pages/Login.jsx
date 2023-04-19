import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/QuizCard/Footer';
import FeedbackButton from '../components/FeedbackButton/FeedbackButton';

//! firebase auth
import { auth, provider } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import '../App.css';

export default function Login({ setIsAuth }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const { googleSignIn, user } = UserAuth();

	const handleGoogleLogin = async () => {
		try {
			await googleSignIn();
		} catch (err) {
			console.error(err);
		}
	};

	// if the user is logged in the redirect
	// and it will run everytime the user state updates
	useEffect(() => {
		if (user != null) {
			navigate('/choose-quiz');
		}
	}, [user]);

	//TODO: throw err warning if password is 6 char or less
	const handleLogin = (e) => {
		e.preventDefault();
		if (email.length === 0 || password.length === 0) {
			return alert('Please enter a valid email and password');
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				navigate('/choose-quiz');
				setIsAuth(true);
				localStorage.setItem(
					'userName',
					JSON.stringify(result.user.displayName)
				);
				localStorage.setItem('userPhoto', JSON.stringify(result.user.photoURL));
			})
			.catch((error) => {
				setError(error.message)
			});
	};



	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen">
			<h2 className="text-xl sm:text-xl text-center font-normal google-font text-white mt-[10rem] -mb-[10rem] sm:-mb-[8rem] sm:mt-[10rem]">
				Random Quiz Game!
			</h2>
			{/* login card container */}
			<div className="mt-auto bg-white h-[24rem] w-[23rem] rounded-lg">
				<h4 className="text-center google-font text-gray-700 mt-7 mb-4">
					Welcome, log in!
				</h4>
				{/* form container */}
				<form className="flex flex-col justify-center items-center h-[15rem]">
					<input
						autoComplete='username'					
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						className="border-2 border-gray-300 rounded-md mb-2 p-2 w-[90%]"
						placeholder="Email"
						required
					/>
					<input
						autoComplete="current-password"						
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						className="border-2 border-gray-300 rounded-md p-2 w-[90%]"
						placeholder="Password"
						required
					/>
					{/* button */}
					<div className="group mt-2 mr-8 sm:mr-14">
						<button
							onClick={handleLogin}
							className="rm-hover ml-8 sm:ml-[3.5rem] transition-all duration-150 bg-[#c08d40] font-bold text-white border-b-8 border-b-[#e3a64b] rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-[#FF9800] group-hover:border-t-[#FF9800] group-hover:shadow-lg"
						>
							<div className="p-2 px-[8.5rem] duration-150 bg-[#FF9800] rounded-lg group-hover:bg-[#FF9800] google-font">
								Play
							</div>
						</button>
					</div>
					{/* render google error if the user does not exist */}
					{error 
						&& <div className='text-sm font-bold text-red-600 pt-2'>Email or Password is incorrect.</div>
					}

					{/* google auth button */}
					<button
						onClick={handleGoogleLogin}
						aria-label="Continue with google"
						role="button"
						className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-[90%] mt-10 hover:translate-y-0.5 duration-150"
					>
						<img
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
							alt="google"
						/>
						<p className="text-[13px] font-medium ml-4 text-gray-700 google-font">
							Continue with Google
						</p>
					</button>
				</form>

				<div className="mt-4 text-center">
					<p className="text-[10px] google-font">Dont have an account?</p>
					<Link to="signup" className="text-blue-600 text-[13px] google-font">
						Sign up here
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
