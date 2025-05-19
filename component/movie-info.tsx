import { URL} from '../app/(home)/page'

async function getMovie(id:string) {
    const res = await fetch(`${URL}/${id}`)
    return res.json()
}

export default async function MovieInfo({id}:{id:string}) {
    const movieItem = await getMovie(id)
    return (
        <div>
            <img src={movieItem.poster_path}/>
            <p>{movieItem.title}</p>
            <p>{movieItem.vote_average}</p>
            <p>{movieItem.overview}</p>
        </div>
    )
}