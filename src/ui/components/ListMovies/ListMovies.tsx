import useMovies from '@/data/hooks/useMovies'
import { CardMovie } from '../CardMovie'
import { InputField } from '../InputField'
import { LoadingOverlay } from '../LoadingOverlay'
import { ContainerFeedback } from '../ContainerFeedback'
import * as S from './ListMovies.styled'
import { IMovie } from '@/data/@types/global.types'

export const ListMovies = () => {
    const { movies, isLoadingMovies, refetch } = useMovies()

    if (!isLoadingMovies && (!movies || movies?.length === 0)) {
        return (
            <ContainerFeedback
                fitType='cover'
                width={'449px'}
                height={'265px'}
                title='Parece que não há nada por aqui :('
                imageUrl='/images/empty-state.png'
                buttonText='Recarregar página'
                onButtonClick={refetch}
            />
        )
    }

    return (
        <S.Container>
            <InputField placeholder='Buscar filme pelo nome' />

            {isLoadingMovies && <LoadingOverlay />}

            {!isLoadingMovies && (
                <S.ContentMovie>
                    {movies?.map((movie: IMovie) => (
                        <CardMovie
                            movie={movie}
                            key={movie.id}
                        />
                    ))}
                </S.ContentMovie>
            )}
        </S.Container>
    )
}
