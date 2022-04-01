import { useState } from 'react'
import SearchForm from '../components/SearchForm'
import Movies from '../components/Movies'

const Search = ({
	input,
	setInput,
	fetchedData,
	setFetchedData,
}) => {
	// console.log(fetchedData)
	return (
		<div>
			<diva>
				<h1>Search</h1>
				<SearchForm
					input={input}
					setInput={setInput}
					fetchedData={fetchedData}
					setFetchedData={setFetchedData}
				/>
			</diva>

			<Movies fetchedData={fetchedData} />
		</div>
	)
}

export default Search
