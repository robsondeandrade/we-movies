import API from '@/config/axios'
import { IMovieCart } from '@/data/@types/global.types'

export class CartService {
    async fetchAllCartMovies() {
        const { data } = await API.get('/cart')
        return data
    }

    async addMovieToCart(movieDetails: IMovieCart) {
        const { data } = await API.post('/cart/', movieDetails)
        return data
    }

    async updateMovieInCart(movieDetails: IMovieCart) {
        const { id, ...updateData } = movieDetails
        const { data } = await API.put(`/cart/${id}`, updateData)
        return data
    }

    async removeMovieFromCart(id: string) {
        const { data } = await API.delete(`/cart/${id}`)
        return data
    }

    async finalizePurchase() {
        const { data: moviesInCart } = await API.get('/cart')

        for (const item of moviesInCart) {
            await API.delete(`/cart/${item.id}`)
            await new Promise((resolve) => setTimeout(resolve, 100))
        }

        return moviesInCart
    }
}
