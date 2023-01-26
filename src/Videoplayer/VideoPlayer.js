import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.scss';

const VideoPlayer = () => {
	const [currentVideo, setCurrentVideo] = useState(0);
	const handleVideoChange = index => {
		setCurrentVideo(index);
	};

	const images = [
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
	];

	const videos = [
		'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
		'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
	];

	const [width, setWidth] = useState(window.innerWidth);
	const [videoWidth, setVideoWidth] = useState(640);
	const [videoHeight, setVideoHeight] = useState(360);
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		if (width <= 1200) {
			setVideoWidth(width * 0.6);
			setVideoHeight(((width * 360) / 640) * 0.6);
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [width]);

	return (
		<div className="videoplayer">
			<div className="title">react-player를 사용한 스트리밍 테스트입니다.</div>
			<div className="video-player">
				<div className="stream-box">
					<ReactPlayer
						url={videos[currentVideo]}
						playing
						controls
						width={videoWidth}
						height={videoHeight}
					/>
					<div className="menu-wrap">
						<div className="changeVideo">다른 동영상</div>
						<div className="menu">
							{images.map((com, index) => {
								return (
									<img className="thumbnail" src={com} onClick={() => handleVideoChange(index)} />
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
