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

    const movies = await getMovies()

    return (
        <>
        <div>HOME</div>
        <div>
            {movies.map((movie) => (
            <div key={movie.id}>
                <Link href={`movies/${movie.id}`}>{movie.title}</Link>
            </div>
            ))}
        </div>
        </>
    )
}
