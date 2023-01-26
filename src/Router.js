import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import VideoPlayer from './Videoplayer/VideoPlayer';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/video" element={<VideoPlayer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
