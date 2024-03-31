import { useQuery, useMutation, useQueryClient } from 'react-query'
import { CartService } from '@/data/services/CartService'
import { useMovieStore } from '../stores/useMovieStore'
import { IMovie } from '../@types/global.types'

const movieService = new CartService()

export const useCartMovies = () => {
    const queryClient = useQueryClient()
    const { setCartMovies, showToast } = useMovieStore()

    const {
        refetch,
        data: cartMovies,
        error: cartMoviesError,
        isLoading: isLoadingCartMovies,
    } = useQuery('cartMovies', movieService.fetchAllCartMovies, {
        onSuccess: (data: IMovie[]) => {
            setCartMovies(data)
        },
        onError: () => {
            showToast(
                'Erro ao carregar os filmes do carrinho. Por favor, tente novamente.',
                5000,
                'error',
            )
        },
        refetchOnWindowFocus: false,
    })

    const addOrUpdateMovieInCart = async (movieToAdd: IMovie) => {
        const existingMovie = cartMovies?.find((movie) => movie.id === movieToAdd.id)
        if (existingMovie) {
            const updatedMovie = { ...existingMovie, quantity: existingMovie.quantity + 1 }
            await movieService.updateMovieInCart(updatedMovie)
        } else {
            const newMovie = { ...movieToAdd, quantity: 1 }
            await movieService.addMovieToCart(newMovie)
        }
        queryClient.invalidateQueries('cartMovies')
    }

    const handleChangeMovieQuantity = async ({
        movieId,
        change,
    }: {
        movieId: string
        change: 'increase' | 'decrease' | 'remove'
    }) => {
        const movie = cartMovies?.find((movie) => movie.id === movieId)
        if (!movie) return

        switch (change) {
            case 'increase':
                movie.quantity += 1
                break
            case 'decrease':
                movie.quantity = movie.quantity > 1 ? movie.quantity - 1 : 0
                break
            case 'remove':
                movie.quantity = 0
                break
        }

        if (movie.quantity > 0) {
            await movieService.updateMovieInCart(movie)
        } else {
            await movieService.removeMovieFromCart(movieId)
        }
        queryClient.invalidateQueries('cartMovies')
    }

    const { mutate: addMovieToCart } = useMutation(addOrUpdateMovieInCart, {
        onSuccess: () => queryClient.invalidateQueries('cartMovies'),
        onError: () => {
            showToast('Erro ao adicionar ou atualizar filme no carrinho.', 5000, 'error')
        },
    })

    const { mutate: changeMovieQuantity } = useMutation(handleChangeMovieQuantity, {
        onSuccess: () => queryClient.invalidateQueries('cartMovies'),
        onError: () => {
            showToast('Erro ao alterar a quantidade do filme no carrinho.', 5000, 'error')
        },
    })

    const { mutate: clearCart } = useMutation(
        async () => {
            await movieService.clearCart()
        },
        {
            onSuccess: () => {
                setCartMovies([])
                queryClient.invalidateQueries('cartMovies')
            },
            onError: () => {
                showToast('Erro ao limpar o carrinho.', 5000, 'error')
            },
        },
    )

    return {
        refetch,
        clearCart,
        cartMovies,
        addMovieToCart,
        cartMoviesError,
        isLoadingCartMovies,
        changeMovieQuantity,
    }
}
