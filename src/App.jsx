import { Routes, Route } from 'react-router-dom';
 
import Quiz from './components/Quiz/Quiz';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ChooseQuiz from './components/ChooseQuiz/ChooseQuiz';
import Protected from './context/Protected';
import { AuthContextProvider } from './context/AuthContext';

import './App.css';

function App() {
	return (
		<>
			<AuthContextProvider>
				<Routes>
          <Route 
            path='/choose-quiz'
            element={
              <Protected>
                <ChooseQuiz/>
              </Protected>
            }
          />
					<Route
						path="/quiz"
						element={
							<Protected>
								<Quiz />
							</Protected>
						}
					/>
					<Route path="/signup" element={<SignUp />} />
					<Route path="/" element={<Login />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
