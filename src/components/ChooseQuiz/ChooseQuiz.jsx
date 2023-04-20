import LogOutBtn from '../LogoutBtn/LogOutBtn';
import { UserAuth } from '../../context/AuthContext';

import { Link } from 'react-router-dom';

export default function ChooseQuiz() {
	const { user } = UserAuth();

	return (
		<>
			<div className="hero min-h-screen">
				{/* choose quiz intro */}
				<div className="hero-content text-center">
					<LogOutBtn />
					<div className="max-w-lg">
						{!user
							? <h1 className="text-2xl font-bold google-font">Welcome, <span className="text-white">{user?.displayName}</span>!</h1>
							: <h1 className="font-bold google-font text-sm sm:text-2xl ">Welcome, <span className="text-white">{user?.email}</span>!</h1>
						}
						
						<p className="py-6 google-font text-white mt-2">Choose A Quiz to try out.</p>
						{/* START grid container for games */}
						<div className="flex flex-col sm:flex-row w-full justify-center items-center space-x-4">
							{/* first card */}
							<div className="card w-96 mb-5 bg-base-100 shadow-xl image-full">
								{/* <figure>
									<img src="/public/vite.svg" alt="Shoes" />
								</figure> */}
								<div className="card-body rounded-xl">
									<h2 className="card-title google-font text-[#F9A826]">
										Random Quiz
									</h2>
									<p className="google-font text-sm text-white opacity-55">
										Random set of questions, to test your knowledge!
									</p>
									<div className="group">
										<button className="w-full transition-all duration-150 bg-green-700 font-bold text-white border-b-8 border-b-green-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-green-700 group-hover:border-t-green-700 group-hover:shadow-lg">
										<Link to='/quiz'>
											<div className="p-2 px-3 duration-150 bg-green-500 rounded-lg group-hover:bg-green-700 google-font text-[10px]">
												Play!
											</div>
											</Link>
										</button>
									</div>
								</div>
							</div>

							{/* second card */}
							<div className="card w-96 bg-base-100 shadow-xl image-full">
								{/* <figure>
									<img src="/public/vite.svg" alt="Shoes" />
								</figure> */}
								<div className="card-body">
									<h2 className="card-title google-font text-[#23b08a]">
										DO YOU KNOW YOUR VINE?
									</h2>
									<p className="google-font text-sm text-white opacity-55">
										Test your knowledge with these old vine's
									</p>
									<div className="">
										<button className="w-full transition-all duration-150 bg-green-700 font-bold text-white border-b-8 border-b-green-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-green-700 group-hover:border-t-green-700 group-hover:shadow-lg">
											<div className="p-2 px-3 duration-150 bg-green-500 rounded-lg group-hover:bg-green-700 google-font text-[10px] line-through">
												Coming Soon!
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
						{/* END grid container for games */}
					</div>
				</div>
			</div>
		</>
	);
}
