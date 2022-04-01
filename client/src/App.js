import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import Search from './pages/Search'
import Header from './components/Header'
import { useState } from 'react'

function App() {
	const [input, setInput] = useState('')
	const [fetchedData, setFetchedData] = useState([])

	return (
		<>
			<BrowserRouter>
				<Header
					input={input}
					setInput={setInput}
					fetchedData={fetchedData}
					setFetchedData={setFetchedData}
				/>
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/search"
							element={
								<Search
									input={input}
									setInput={setInput}
									fetchedData={fetchedData}
									setFetchedData={setFetchedData}
								/>
							}
						/>
						{/* <Route
              path="/movies"
              element={<Movies />}
            /> */}
						<Route
							path="/movies/:movieId"
							element={<Details />}
						/>
						{/* <Route
              path="*"
              element={<h1>Bad Request</h1>}
            /> */}
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
