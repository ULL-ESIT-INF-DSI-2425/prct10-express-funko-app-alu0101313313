import { GenreFunko } from "../enums/genreFunko.js";
import { typeFunko } from "../types/typeFunko.js";

export interface IFunko {
  id: number;
  name: string;
  description: string;
  type: typeFunko;
  genre: GenreFunko; // GenreFunko
  image: string;
  price: number;
  stock: number;
  releaseDate: Date;
  exclusive: boolean;
  specialEdition: boolean;
  size: number; // SizeFunko
  color: string;
  material: string;
  brand: string;
}