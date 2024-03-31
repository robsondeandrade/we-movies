import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useMovieStore } from '../stores/useMovieStore'
import { IMovieCart } from '../@types/global.types'
import {
    CartService,
    addOrUpdateMovieInCart,
    handleChangeMovieQuantity,
} from '@/data/services/CartService'

const cartService = new CartService()

export const useCartMovies = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { setMoviesInCart, showToast, moviesInCart } = useMovieStore()

    const {
        refetch,
        data: cartMovies,
        isLoading: isLoadingCartMovies,
    } = useQuery('cartMovies', cartService.fetchAllCartMovies, {
        onSuccess: (data: IMovieCart[]) => {
            setMoviesInCart(data)
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

    const onOperationSuccess = () => {
        queryClient.invalidateQueries('cartMovies')
    }
    const { mutate: addMovieToCart } = useMutation<void, unknown, IMovieCart>(
        async (movieToAdd) => {
            await addOrUpdateMovieInCart(movieToAdd, moviesInCart, onOperationSuccess)
        },
        {
            onSuccess: () => queryClient.invalidateQueries('cartMovies'),
            onError: () => {
                showToast('Erro ao adicionar ou atualizar filme no carrinho.', 5000, 'error')
            },
        },
    )

    const { mutate: changeMovieQuantity } = useMutation(
        async ({
            movieId,
            change,
        }: {
            movieId: string
            change: 'increase' | 'decrease' | 'remove'
        }) => {
            await handleChangeMovieQuantity(movieId, change, moviesInCart, onOperationSuccess)
        },
        {
            onSuccess: () => queryClient.invalidateQueries('cartMovies'),
            onError: () => {
                showToast('Erro ao alterar a quantidade do filme no carrinho.', 5000, 'error')
            },
        },
    )

    const { mutate: finalizePurchase, isLoading: isLoadingFinalizePurchase } = useMutation(
        async () => {
            await cartService.finalizePurchase()
        },
        {
            onSuccess: () => {
                setMoviesInCart([])
                queryClient.invalidateQueries('cartMovies')
                navigate('/compra-realizada')
            },
            onError: () => {
                showToast('Erro ao finalizar a compra. tente novamente mais tarde.', 5000, 'error')
            },
            retry: false,
        },
    )

    return {
        refetch,
        cartMovies,
        addMovieToCart,
        finalizePurchase,
        isLoadingCartMovies,
        changeMovieQuantity,
        isLoadingFinalizePurchase,
    }
}
