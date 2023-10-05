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