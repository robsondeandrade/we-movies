import { MovieService } from '@/data/services/MovieService'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { useQuery } from 'react-query'

const movieService = new MovieService()

const useMovies = () => {
    const { setMovies } = useMovieStore()

    const {
        refetch,
        data: movies,
        error: moviesError,
        isLoading: isLoadingMovies,
    } = useQuery('movies', movieService.fetchAllMovies, {
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

export default useMovies
