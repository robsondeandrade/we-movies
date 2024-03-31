import { MovieService } from '@/data/services/MovieService'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { useQuery } from 'react-query'

const movieService = new MovieService()

export const useMovies = (titleFilter?: string) => {
    const { setMovies, showToast } = useMovieStore()
    const fetchMovies = () => movieService.fetchAllMovies(titleFilter)

    const {
        refetch,
        data: movies,
        isLoading: isLoadingMovies,
    } = useQuery(['movies', titleFilter], fetchMovies, {
        onSuccess: (data) => {
            setMovies(data)
        },
        onError: () => {
            showToast(
                'Erro ao carregar os filmes. Por favor, tente novamente mais tarde.',
                5000,
                'error',
            )
        },
        refetchOnWindowFocus: false,
    })

    return {
        movies,
        refetch,
        isLoadingMovies,
    }
}
