import MovieItem from '../../component/movieItem'
import homeStyles from '../../styles/home.module.css'

export const metadata = {
    title: "HOME"
}

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
    const res = await fetch(`${URL}`)
    return res.json()
}

// export default async function Page() {

//     const movies = await getMovies();

//     return (
//         <div className={homeStyles.container}>
//             {movies.map((movie) => (
//                 <MovieItem 
//                     key={movie.id}
//                     id={movie.id} 
//                     poster_path={movie.poster_path} 
//                     title={movie.title}
//                 />                
//             ))}
//         </div>
//     )
// }


// Next.js 15+에서는 page.tsx 컴포넌트가 기본적으로 { params, searchParams }를 받는다고 간주함
// 쓰지 않더라도 타입에 명시해 줘야 함

type PageProps = {
  params: {}; // 현재 사용 안 하므로 빈 객체로 설정
  searchParams?: {}; // optional
};

export default async function Page({ params }: PageProps) {
  const movies = await getMovies();

  return (
    <div className={homeStyles.container}>
      {movies.map((movie:any) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
