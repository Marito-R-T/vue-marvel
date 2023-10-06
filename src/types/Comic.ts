export type Comic = {
    resourceURI: string,
    name: string
}

export class Comics implements Resources {
    available!: boolean
    collectionURI!: string
    items!: Array<Comics>

    totalResources = () => {
        return `${this.available} comics`
    }
}

export class FullComic {
    title!: string
    description!: string
    format!: string
    pageCount!: number
    modified!: Date
}