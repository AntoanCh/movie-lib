import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
// import searchSlice from '../features/search/searchSlice'
// import { store } from '../app/store'
// import { changeInput } from '../features/search/searchSlice'
// import { useDispatch } from 'react-redux'

const SearchForm = ({
	input,
	setInput,
	fetchedData,
	setFetchedData,
}) => {
	const handleInput = (e) => {
		setInput(e.target.value)
	}

	async function fetchData() {
		const { data } = await axios.get(
			`https://api.tvmaze.com/search/shows?q=${input}`
		)

		setFetchedData(data)
		console.log(fetchedData)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate('/search')
		fetchData()
	}
	const navigate = useNavigate()
	const location = useLocation()
	// const dispatch = useDispatch()

	return (
		<div>
			<form className="search" onSubmit={handleSubmit}>
				<TextField
					id="search"
					label="Search Movies"
					type="search"
					variant="outlined"
					margin="dense"
					value={input}
					onChange={handleInput}
				/>
				<Button
					variant="outlined"
					color="primary"
					size="large"
					type="submit"
				>
					Search
				</Button>
			</form>
		</div>
	)
}

export default SearchForm
