import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Details = () => {
	useEffect(() => {
		axios
			.get(
				`https://api.tvmaze.com/lookup/shows?imdb=${params.movieId}`
			)
			.then((data) => {
				console.log(data)
			})
	})
	const params = useParams()
	return <div>{params.movieId}</div>
}

export default Details
