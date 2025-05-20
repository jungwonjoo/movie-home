
import { URL } from '../app/contants'
import styles from '../styles/movie-info.module.css'

export async function getMovie(id:string) {
    const res = await fetch(`${URL}/${id}`)
    return res.json()
}

export default async function MovieInfo({id}:{id:string}) {
    const movieItem = await getMovie(id)
    return (
        <div className={styles.container}>
            <img src={movieItem.poster_path} className={styles.poster}/>
            <div className={styles.info}>
                <p className={styles.title}>{movieItem.title}</p>
                <p>😍 {movieItem.vote_average.toFixed(1)}</p>
                <p>{movieItem.overview}</p>
                <a href={movieItem.homepage} target='_blank'>
                    Homepage &rarr;
                </a>
            </div>
            
        </div>
    )
}