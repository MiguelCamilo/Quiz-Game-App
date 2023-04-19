import { useState } from 'react';

import LogOutBtn from '../LogoutBtn/LogOutBtn';
import { UserAuth } from '../../context/AuthContext';

export default function ChooseQuiz() {
	const { user } = UserAuth();

	return (
		<>
			<div className="hero min-h-screen bg-base-200">
				{/* choose quiz intro */}
				<div className="hero-content text-center">
					<LogOutBtn />
					<div className="max-w-lg">
						<h1 className="text-2xl font-bold google-font whitespace-nowrap">
							Welcome,{' '}
							<span className="text-[#570df8]">{user?.displayName}</span>!
						</h1>
						<p className="py-6"></p>
						{/* START grid container for games */}
						<div className="flex flex-row space-x-4">
							<div className="card w-96 bg-base-100 shadow-xl image-full">
								<figure>
									<img
										src="/public/vite.svg"
										alt="Shoes"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title google-font text-[#23b08a]">DO YOU KNOW YOUR VINE?</h2>
									<p className='google-font text-sm text-white opacity-55'>Test your knowledge with these old vine's</p>
									<div className="card-actions justify-end">
										<button className="btn btn-primary w-full google-font">Coming Soon!</button>
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
