import API from '@/config/axios'
import { IMovie } from '@/data/@types/global.types'

export class CartService {
    async fetchAllCartMovies() {
        const { data } = await API.get('/cart')
        return data
    }

    async addMovieToCart(movieDetails: Partial<IMovie>) {
        const { data } = await API.post('/cart/', movieDetails)
        return data
    }

    async updateMovieInCart(movieDetails: IMovie) {
        const { id, ...updateData } = movieDetails
        const { data } = await API.put(`/cart/${id}`, updateData)
        return data
    }

    async removeMovieFromCart(id: string) {
        const { data } = await API.delete(`/cart/${id}`)
        return data
    }

    async clearCart() {
        const { data: cartItems } = await API.get('/cart')
        const deletePromises = cartItems.map((item: { id: string }) =>
            API.delete(`/cart/${item.id}`),
        )

        await Promise.all(deletePromises)
        return cartItems
    }
}
