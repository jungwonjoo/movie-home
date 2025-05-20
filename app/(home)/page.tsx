import MovieItem from '../../component/movieItem'
import homeStyles from '../../styles/home.module.css'
import { URL } from '../contants'

export const metadata = {
    title: "HOME"
}

async function getMovies() {
    const res = await fetch(URL)
    return res.json()
}

export default async function Page() {

    const movies = await getMovies();

    return (
        <div className={homeStyles.container}>
            {movies.map((movie) => (
                <MovieItem 
                    key={movie.id}
                    id={movie.id} 
                    poster_path={movie.poster_path} 
                    title={movie.title}
                />                
            ))}
        </div>
    )
}
