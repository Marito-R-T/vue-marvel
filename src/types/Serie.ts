import type { Character, Characters } from "./Character"
import type { Comic, Comics } from "./Comic"
import type { Creator, Creators } from "./Creator"
import type { Stories, Story } from "./Story"
import type { Thumbnail } from "./Thumbnail"

export type Serie = {
  id: number,
  title: string,
  type: string,
  thumbnail: Thumbnail,
  startYear: number,
  endYear: number,
  characters: Characters
  comics: Comics
  creators: Creators
  stories: Stories
}