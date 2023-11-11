import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Store } from './Components/Store';
import './assets/styles/global.css';

export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/store'
					element={<Store />}
				/>
			</Routes>
		</>
	);
}
