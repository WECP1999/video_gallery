import IMovie from "./IMovie";

interface ICategory<T> {
  id: number;
  category: string;
  movies: T[];
}

export default ICategory;
