import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

function FeedbackButton() {
	let [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="flex items-center justify-center mt-2">
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Submit Feedback
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" onClose={() => setIsOpen(false)}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="flex justify-end">
										<button type="button" className="" onClick={() => setIsOpen(false)}>
											X
										</button>
									</div>
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900 text-center"
									>
										Got <span className="line-through text-gray-400">Milk</span>{" "}
										Feedback?
									</Dialog.Title>
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
                                                <input type="hidden" name="_gotcha" className="gtcha"/>
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
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default FeedbackButton;
