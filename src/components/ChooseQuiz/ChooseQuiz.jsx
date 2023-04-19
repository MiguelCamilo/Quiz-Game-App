import { useState } from 'react';

import LogOutBtn from '../LogoutBtn/LogOutBtn';
import { UserAuth } from '../../context/AuthContext';

export default function ChooseQuiz() {
	const { user } = UserAuth();

	return (
		<>
			<div className="hero min-h-screen">
				{/* choose quiz intro */}
				<div className="hero-content text-center">
					<LogOutBtn />
					<div className="max-w-lg">
						<h1 className="text-2xl font-bold google-font whitespace-nowrap">
							Welcome, <span className="text-white">{user?.displayName}</span>!
						</h1>
						<h3 className="google-font text-white mt-2">
							Choose A Quiz to try out.
						</h3>
						<p className="py-6"></p>
						{/* START grid container for games */}
						<div className="flex flex-row w-full space-x-4">
							{/* first card */}
							<div className="card w-96 bg-base-100 shadow-xl image-full">
								{/* <figure>
									<img src="/public/vite.svg" alt="Shoes" />
								</figure> */}
								<div className="card-body">
									<h2 className="card-title google-font text-white">
										Random Quiz
									</h2>
									<p className="google-font text-sm text-white opacity-55">
										Random set of questions, to test your knowledge!
									</p>
									<div className="">
										<button className="w-full transition-all duration-150 bg-red-700 font-bold text-white border-b-8 border-b-red-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-red-700 group-hover:border-t-red-700 group-hover:shadow-lg">
											<div className="p-2 px-3 duration-150 bg-red-500 rounded-lg group-hover:bg-red-700 google-font text-[10px]">
												Play!
											</div>
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
									<div className="card-actions justify-end">
										<button className="btn no-animation hover: w-full google-font">
											Coming Soon!
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
