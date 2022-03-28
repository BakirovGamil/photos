import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Header from "./components/Header";
import {authRoute, publicRoutes} from "./routes/routes";
import { useState } from "react";

export const UserContext = createContext([]);

function App() {
	const userArray= useState({
		id: 1,
		isAdmin: false
	});
	return (
		<div className="wrapper">
			<UserContext.Provider value={userArray}>
				<BrowserRouter>
					<Header/>
					<main>
					
						<Routes>
							{publicRoutes.map(route => {
								return (
									<Route key={route.path} path={route.path} element={route.element} />
								);
							})}

							{Object.keys(userArray[0]).length &&
								authRoute.map(route => {
									return (
										<Route key={route.path} path={route.path} element={route.element} />
									);
								})
							}
						</Routes>
					</main>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;
