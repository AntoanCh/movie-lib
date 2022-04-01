import { Navigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	const goHome = () => {
		navigate('/search')
	}
	return (
		<div>
			<Button onClick={goHome}>GO HOME</Button>
		</div>
	)
}

export default Home
