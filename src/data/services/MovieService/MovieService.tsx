import API from '@/config/axios'

export class MovieService {
    async fetchAllMovies(title?: string) {
        const queryParam = title ? `?title_like=${title}` : ''
        const { data } = await API.get(`/products${queryParam}`)
        return data
    }
}
