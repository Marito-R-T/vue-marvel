export type Creator = {
    resourceURI: string,
    name: string,
    role: string
}

export class Creators {
    available!: boolean
    collectionURI!: string
    items!: Array<Creator>

    totalResources(): string {
        return `${this.available} creators`
    }
}

export class FullCreator {
    firstName!: string
    middleName !: string
    lastName!: string
    modified!: Date
}
