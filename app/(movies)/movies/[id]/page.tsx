import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../component/movie-info'
import MovieVideo from '../../../../component/movie-videos'

interface IParams{
    params:{id:string}
}

export async function  generateMetadata({params:{id}}:IParams) {
    
    const movie = await getMovie(id)
    
    return {
        title: movie.title
    }
}

export default async function Page({params:{id}}:IParams){
    return(
        <div>  
            <Suspense fallback={<h1>기다려</h1>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<h1>기다려</h1>}>
                <MovieVideo id={id}/>
            </Suspense>
        </div>
    )
}