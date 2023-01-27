import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import VideoPlayer from './Videoplayer/VideoPlayer';
import MyChart from './MyChart/MyChart';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/video" element={<VideoPlayer />} />
				<Route path="/chart" element={<MyChart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
