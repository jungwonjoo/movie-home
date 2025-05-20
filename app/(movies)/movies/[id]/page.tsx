import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../component/movie-info'
import MovieVideo from '../../../../component/movie-videos'

interface IParams{
    params:{id:string}
}

// export async function  generateMetadata({params:{id}}:IParams) {
    
//     const movie = await getMovie(id)
    
//     return {
//         title: movie.title
//     }
// }


type PageProps = Promise<{ params: { id: string } }>;

export async function generateMetadata(props: PageProps) {
  const { params } = await props;
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}


// export default async function Page({ params}: IParams ){

//     const id = params.id;

export default async function Page(props: PageProps) {
  const { params } = await props;

    return(
        <div>  
            <Suspense fallback={<h1>기다려</h1>}>
                <MovieInfo id={params.id}/>
            </Suspense>

            <Suspense fallback={<h1>기다려</h1>}>
                <MovieVideo id={params.id}/>
            </Suspense>
        </div>
    )
}