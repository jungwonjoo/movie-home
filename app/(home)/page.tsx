import homeStyles from '../../styles/home.module.css'
import movieStyles from '../../styles/movie.module.css'
import Link from 'next/link'

export const metadata = {
    title: "HOME"
}

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export async function getMovies() {
    const res = await fetch(URL)
    return res.json()
}

export default async function Page() {

    const movies = await getMovies();

    return (
        <div className={homeStyles.container}>
            {movies.map((movie) => (
            <div key={movie.id} className={movieStyles.movie}>
                <img src={movie.poster_path}/>
                <Link href={`movies/${movie.id}`}>{movie.title}</Link>
            </div>
            ))}
        </div>
    )
}
