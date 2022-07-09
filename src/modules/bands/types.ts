export type Member = {
    artistId: string
    instrument: string
    years: string[]
}

export type BandResponse = {
    _id: string
    name: string
    origin: string
    members: Member[]
    website: string
    genresIds: string[]
}
