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
        console.log("Total resources")
        return `${this.available} stories`
    }
}
