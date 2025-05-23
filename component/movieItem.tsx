'use client';

import Link from 'next/link';
import movieStyles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMovieItem {
  id: string;
  poster_path: string;
  title: string;
}

export default function MovieItem({ id, poster_path, title }: IMovieItem) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={movieStyles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
