import { MovieService } from '@/data/services/MovieService'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { useQuery } from 'react-query'

const movieService = new MovieService()

const useMovies = () => {
    const { setMovies } = useMovieStore()

    const {
        data: movies,
        isLoading: isLoadingMovies,
        error: moviesError,
    } = useQuery('movies', movieService.fetchAllMovies, {
        onSuccess: (data) => {
            setMovies(data)
        },
    })

    return {
        movies,
        isLoadingMovies,
        moviesError,
    }
}

export default useMovies
