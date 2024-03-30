import { MovieService } from '@/data/services/MovieService'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { useQuery } from 'react-query'

const movieService = new MovieService()

export const useMovies = (titleFilter?: string) => {
    const { setMovies } = useMovieStore()
    const fetchMovies = () => movieService.fetchAllMovies(titleFilter)

    const {
        refetch,
        data: movies,
        error: moviesError,
        isLoading: isLoadingMovies,
    } = useQuery(['movies', titleFilter], fetchMovies, {
        onSuccess: (data) => {
            setMovies(data)
        },
    })

    return {
        movies,
        refetch,
        moviesError,
        isLoadingMovies,
    }
}
