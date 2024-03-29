import useMovies from '@/data/hooks/useMovies'
import { CardMovie } from '../CardMovie'
import { InputField } from '../InputField'
import { IMovie } from '@/data/services/MovieService/type'
import * as S from './ListMovies.styled'

export const ListMovies = () => {
    const { movies } = useMovies()

    return (
        <S.Container>
            <InputField placeholder='Buscar filme pelo nome' />
            <S.ContentMovie>
                {movies?.map((movie: IMovie) => (
                    <CardMovie
                        product={movie}
                        key={movie.id}
                    />
                ))}
            </S.ContentMovie>
        </S.Container>
    )
}
