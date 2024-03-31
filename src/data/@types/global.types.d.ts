export interface IMovie {
    id: string
    title: string
    price: number
    image: string
}

export interface IMovieCart extends IMovie {
    quantity: number
}
