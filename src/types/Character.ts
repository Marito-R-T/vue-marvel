export type Character = {
    resourceURI: string,
    name: string
}

export class Characters {
    available!: boolean
    collectionURI!: string
    items!: Array<Character>

    totalResources(): string {
        return `${this.available} characters`
    }
}
