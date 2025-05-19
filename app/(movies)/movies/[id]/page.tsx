import { Suspense } from 'react'
import MovieInfo from '../../../../component/movie-info'
import MovieVideo from '../../../../component/movie-videos'

export default async function Page({params:{id}}:{params:{id:string}}){
    return(
        <div>
            
            {/* <img src={movieItem.poster_path}/>
            <p>{movieItem.title}</p>
            <p>{movieItem.vote_average}</p>
            <p>{movieItem.overview}</p> */}
            
            

            {/* {videoItem.map((video) => (
                <iframe 
                    key={video.id} 
                    src={`https://www.youtube.com/embed/${video.key}`} 
                    title={video.name} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                /> 
            ))} */}

            <Suspense fallback={<h1>기다려</h1>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<h1>기다려</h1>}>
                <MovieVideo id={id}/>
            </Suspense>
        </div>
    )
}