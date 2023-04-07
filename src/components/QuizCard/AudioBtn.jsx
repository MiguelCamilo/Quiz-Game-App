import { SpeakerWaveIcon } from "@heroicons/react/20/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { PlayIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

// import music file
import music from "/music.mp3";

export default function AudioBtn() {
	const [audio, setAudio] = useState(true);
	const [audioObject, setAudioObject] = useState(null);

	const toggleAudio = () => {
		setAudio((audio) => !audio);
	};

	useEffect(() => {
		const audioElement = new Audio(music);
		audioElement.loop = true;
		setAudioObject(audioElement);
	}, [music]);

	useEffect(() => {
		if (audioObject) {
			if (audio) {
				audioObject.play();
			} else {
				audioObject.pause();
			}
		}
	}, [audio, audioObject]);
    

	return (
		<>
			<div className=" ml-auto mr-5 mt-5">
				<button
					onClick={toggleAudio}
					className="w-[100%] transition-all duration-150 bg-green-700 font-bold text-white border-b-8 border-b-green-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-green-700 group-hover:border-t-green-700 group-hover:shadow-lg"
				>
					<div className="p-2 px-3 duration-150 bg-green-500 rounded-lg group-hover:bg-green-700 google-font text-[10px]">
						{audio
                         ? 
							<SpeakerWaveIcon className="h-6 w-6" />
						 : 
							<SpeakerXMarkIcon className="h-6 w-6" />
						}
					</div>
				</button>
			</div>
		</>
	);
}
