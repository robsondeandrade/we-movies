import { IMovieCart } from '@/data/@types/global.types'
import { CartService } from '.'

const cartService = new CartService()

export async function addOrUpdateMovieInCart(
    movieToAdd: IMovieCart,
    cartMovies: IMovieCart[],
    onOperationSuccess: () => void,
) {
    const existingMovie = cartMovies?.find((movie) => movie.id === movieToAdd.id)
    if (existingMovie) {
        const updatedMovie = { ...existingMovie, quantity: existingMovie.quantity + 1 }

        await cartService.updateMovieInCart(updatedMovie)
        onOperationSuccess()
    } else {
        await cartService.addMovieToCart({ ...movieToAdd, quantity: 1 })
        onOperationSuccess()
    }
}

export async function handleChangeMovieQuantity(
    movieId: string,
    change: 'increase' | 'decrease' | 'remove',
    cartMovies: IMovieCart[],
    onOperationSuccess: () => void,
) {
    const movieIndex = cartMovies?.findIndex((movie) => movie.id === movieId)
    if (movieIndex === -1) return

    const movie = cartMovies[movieIndex]
    const updatedMovie = { ...movie }

    switch (change) {
        case 'increase':
            updatedMovie.quantity += 1
            break
        case 'decrease':
            updatedMovie.quantity = updatedMovie.quantity > 1 ? updatedMovie.quantity - 1 : 0
            break
        case 'remove':
            updatedMovie.quantity = 0
            break
    }

    if (updatedMovie.quantity > 0) {
        await cartService.updateMovieInCart(updatedMovie)
    } else {
        await cartService.removeMovieFromCart(movieId)

        onOperationSuccess()
    }
}
