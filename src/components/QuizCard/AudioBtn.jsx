import { SpeakerWaveIcon } from "@heroicons/react/20/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function AudioBtn() {
	const [audio, setAudio] = useState(true);

	const mute_audio = () => {
		setAudio(false)
	};

	return (
		<>
			<div className="group ml-auto mr-5 mt-5">
				<button
					onClick={mute_audio}
					className="w-[100%] transition-all duration-150 bg-green-700 font-bold text-white border-b-8 border-b-green-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-green-700 group-hover:border-t-green-700 group-hover:shadow-lg"
				>
					<div className="p-2 px-3 duration-150 bg-green-500 rounded-lg group-hover:bg-green-700 google-font text-[10px]">
						{audio ? (
							<SpeakerWaveIcon className="h-6 w-6" />
						) : (
							<SpeakerXMarkIcon className="h-6 w-6" />
						)}
					</div>
				</button>
			</div>
		</>
	);
}
