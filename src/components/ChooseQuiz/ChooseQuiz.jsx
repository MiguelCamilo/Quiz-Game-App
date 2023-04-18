import { useState } from 'react';

import { UserAuth } from '../../context/AuthContext';

export default function ChooseQuiz() {
	const { user } = UserAuth();

	return (
		<>
			<div className="hero min-h-screen bg-base-200">
				{/* choose quiz intro */}
				<div className="hero-content text-center">
					<div className="max-w-lg">
						<h1 className="text-2xl font-bold google-font whitespace-nowrap mr-10">
							Welcome,{' '}
							<span className="text-[#570df8]">{user?.displayName}</span>!
						</h1>
						<p className="py-6"></p>
						{/* START grid container for games */}                    
						<div className='flex flex-row space-x-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
							<figure>
								{/* <img
									src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="Shoes"
								/> */}
							</figure>
							<div className="card-body">
								<h2 className="card-title">Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>

                        <div className="card w-96 bg-base-100 shadow-xl">
							<figure>
								{/* <img
									src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="Shoes"
								/> */}
							</figure>
							<div className="card-body">
								<h2 className="card-title">Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>

                        <div className="card w-96 bg-base-100 shadow-xl">
							<figure>
								{/* <img
									src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="Shoes"
								/> */}
							</figure>
							<div className="card-body">
								<h2 className="card-title">Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Buy Now</button>
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
