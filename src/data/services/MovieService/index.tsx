import API from '@/config/axios'
import { IMovie } from '@/data/@types/global.types'

export class MovieService {
    async fetchAllMovies() {
        const { data } = await API.get('/products')
        return data
    }
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
}
