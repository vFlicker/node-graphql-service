interface Member {
    artistId: string
    instrument: string
    years: string[]
}

export interface Band {
    _id: string
    name: string
    origin: string
    members: Member[]
    website: string
    genresIds: string[]
}
