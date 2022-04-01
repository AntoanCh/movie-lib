import Movie from './Movie'

const Movies = ({ fetchedData }) => {
	return (
		<div>
			{fetchedData.map((movie) => (
				<Movie
					id={movie.show.externals.imdb}
					image={movie.show.image.medium}
					name={movie.show.name}
					genres={movie.show.genres}
					runtime={movie.show.averageRuntime}
					site={movie.show.officialSite}
					summary={movie.show.summary}
					premiered={movie.show.premiered}
					key={movie.show.id}
				/>
			))}
		</div>
	)
}

export default Movies
