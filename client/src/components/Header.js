// import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const Header = ({
	input,
	setInput,
	fetchedData,
	setFetchedData,
}) => {
	return (
		<header className="header">
			<h2>My Movie Collection</h2>
			<SearchForm
				input={input}
				setInput={setInput}
				fetchedData={fetchedData}
				setFetchedData={setFetchedData}
			/>
		</header>
	)
}

export default Header
