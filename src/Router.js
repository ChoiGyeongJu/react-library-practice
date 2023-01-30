import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import VideoPlayer from './Videoplayer/VideoPlayer';
import MyChart from './MyChart/MyChart';
import Calendar from './Calendar/Calendar';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/video" element={<VideoPlayer />} />
				<Route path="/chart" element={<MyChart />} />
				<Route path="/calendar" element={<Calendar />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
