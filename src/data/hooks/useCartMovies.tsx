import { useQuery, useMutation, useQueryClient } from 'react-query'
import { MovieService } from '@/data/services/MovieService'
import { useMovieStore } from '../stores/useMovieStore'

const movieService = new MovieService()

export const useCartMovies = () => {
    const queryClient = useQueryClient()
    const { setCartMovies } = useMovieStore()

    const {
        data: cartMovies,
        isLoading: isLoadingCartMovies,
        error: cartMoviesError,
    } = useQuery('cartMovies', movieService.fetchAllCartMovies, {
        onSuccess: (data) => {
            setCartMovies(data)
        },
    })

    const { mutate: addMovieToCart } = useMutation(movieService.addMovieToCart, {
        onSuccess: () => queryClient.invalidateQueries('cartMovies'),
    })

    const { mutate: removeMovieFromCart } = useMutation(movieService.removeMovieFromCart, {
        onSuccess: () => queryClient.invalidateQueries('cartMovies'),
    })

    const { mutate: updateMovieInCart } = useMutation(movieService.updateMovieInCart, {
        onSuccess: () => queryClient.invalidateQueries('cartMovies'),
    })

    return {
        cartMovies,
        isLoadingCartMovies,
        cartMoviesError,
        addMovieToCart,
        removeMovieFromCart,
        updateMovieInCart,
    }
}
