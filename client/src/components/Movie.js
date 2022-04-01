import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router-dom'

const Movie = ({
	image,
	name,
	genres,
	runtime,
	site,
	summary,
	premiered,
	id,
}) => {
	const navigate = useNavigate()
	const openDetails = () => {
		navigate(`/movies/${id}`)
	}
	return (
		<div className="movie">
			<div>
				<img src={image} onClick={openDetails} />
			</div>
			<div>
				<h2 onClick={openDetails}>
					{name}({premiered})
				</h2>
				<p>
					{genres.join()} | {runtime} minutes
				</p>
				<p>{summary}</p>
				<a href={site}>View official site</a>
				<br />
				<Button
					size="large"
					color="primary"
					variant="outlined"
				>
					Favorites
				</Button>
			</div>
		</div>
	)
}

export default Movie
