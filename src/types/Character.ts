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

export class FullCharacter {
    name!: string
    description!: string
    modified!: Date
}
