export type UserResponse = {
    _id: string
    firstName: string
    lastName: string
    password: string
    email: string
}

export type JWT = {
    jwt: string
}

export type JWTInput = {
    email: string
    password: string
}

export type UserRegisterInput = {
    firstName: string
    lastName: string
    password: string
    email: string
}
