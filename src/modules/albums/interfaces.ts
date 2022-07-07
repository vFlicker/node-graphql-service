export interface Album {
    _id: string
    name: string
    released: number
    artistsIds: string[]
    bandsIds: string[]
    trackIds: string[]
    genresIds: string[]
    image: string
}
