export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode",
}

export interface IDetailsResult {
  Genre: string;
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  Director: string;
  Actors: string;
  Website: string;
}

export const useApi = () => {
  const searchData = async (title: string, type: SearchType) => {
    const result = await fetch(
      `${import.meta.env.VITE_API_URL}?s=${encodeURI(
        title
      )}&type=${type}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    return result.json();
  };

  const getDetails = async (id: string): Promise<IDetailsResult> => {
    const result = await fetch(
      `${import.meta.env.VITE_API_URL}?i=${id}&plot=full&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    return result.json();
  };

  return { searchData, getDetails };
};
