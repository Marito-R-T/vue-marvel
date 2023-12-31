export type Story = {
    resourceURI: string,
    name: string,
    type: string
}

export class Stories {
    available!: boolean
    collectionURI!: string
    items!: Array<Story>

    totalResources(): string {
        return `${this.available} stories`
    }
}

export class FullStory {
    name!: string
    type!: string
    title!: string
    modified!: Date
    description!: string
}
