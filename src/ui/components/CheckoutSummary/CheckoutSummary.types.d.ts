import { IMovie } from '@/data/services/MovieService/type'

export interface ICardMovieProps {
    movie: IMovie
}
type TMutateFunction = (variables: {
    movieId: string
    change: 'remove' | 'increase' | 'decrease'
}) => void
