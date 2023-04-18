import { useState } from "react";

function FeedbackButton() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* The button to open modal */}
			<label
				htmlFor="my-modal-4"
				className="flex justify-center items-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
			>
				Submit Feedback
			</label>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal-4" className="modal-toggle" />
			<label htmlFor="my-modal-4" className="modal cursor-pointer">
				<label className="modal-box relative" htmlFor="">
					<h3 className="text-lg font-bold text-center">
						Got <span className="line-through text-gray-400">Milk</span>{' '}
						Feedback?
					</h3>
					<div className="py-4">
						<div className="mt-2">
							<form
								id="contactForm"
								// getForm that stores data on getform.io
								action="https://getform.io/f/1e9b4891-fd20-48ef-ad17-8d38a93d8143"
								method="POST"
								className="bg-white p-6 rounded-lg shadow-md"
							>
								<div className="mb-4">
									<label
										className="block text-gray-700 font-bold mb-2"
										htmlFor="name"
									>
										Name
									</label>
									<input
										className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="name"
										name="name"
										type="text"
										placeholder="Name"
										required
									/>
									<input type="hidden" name="_gotcha" className="gtcha" />
								</div>

								<div className="mb-4">
									<label
										className="block text-gray-700 font-bold mb-2"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="email"
										name="email"
										type="email"
										placeholder="Email"
										required
									/>
								</div>

								<div className="mb-4">
									<label
										className="block text-gray-700 font-bold mb-2"
										htmlFor="feedback"
									>
										Feedback
									</label>
									<textarea
										className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="feedback"
										name="feedback"
										placeholder="What could we improve on?"
										required
									></textarea>
								</div>

								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</label>
			</label>
		</>
	);
}

export default FeedbackButton;
