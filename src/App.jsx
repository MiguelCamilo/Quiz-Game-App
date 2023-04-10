import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Quiz from "./components/Quiz/Quiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./App.css";

function App() {
	const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/" element={<Login setIsAuth={setIsAuth} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
