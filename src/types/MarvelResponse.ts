import type { Serie } from "./Serie"

export type DataSerie = {
  results: Array<any>
}

export type Data = {
  data: DataSerie
}

export type MarvelResponse = {
  data: Data
}