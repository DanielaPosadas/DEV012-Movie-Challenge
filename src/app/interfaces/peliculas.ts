export interface ContainerPeliculas {
    page: number,
    results: Peliculas[],
    total_pages: number,
    total_results: number
}

export interface Peliculas {
        adult: boolean,
        backdrop_path: string,
        genre_ids: Array<number>,
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
}

export interface Detalle {
  adult: boolean,
  backdrop_path: string,
  genres: Generos[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: Array<object>,
  title: string,
  vote_average: number,
  vote_count: number
}

export interface Generos {
  id: number,
  name: string
}
    

