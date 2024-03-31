import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CardMovie } from '../CardMovie'
import { InputField } from '../InputField'
import { LoadingOverlay } from '../LoadingOverlay'
import { ContainerFeedback } from '../ContainerFeedback'
import { IMovie } from '@/data/@types/global.types'
import { useMovies } from '@/data/hooks/useMovies'
import { useMovieStore } from '@/data/stores/useMovieStore'
import * as S from './ListMovies.styled'

export const ListMovies = () => {
    const { setSearchTerm, searchTerm } = useMovieStore()
    const { movies, isLoadingMovies, refetch } = useMovies(searchTerm)
    const location = useLocation()
    const navigate = useNavigate()

    const handleResetSearch = () => {
        navigate('/', { replace: true })
        refetch()
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const searchQuery = queryParams.get('search')

        if (searchQuery !== searchTerm) {
            setSearchTerm(searchQuery || '')
            refetch()
        }
    }, [location, setSearchTerm, searchTerm, refetch])

    if (!isLoadingMovies && (!movies || movies?.length === 0)) {
        return (
            <ContainerFeedback
                fitType='cover'
                width={'449px'}
                height={'265px'}
                buttonText='Recarregar página'
                onButtonClick={handleResetSearch}
                imageUrl='/images/empty-state.png'
                title='Parece que não há nada por aqui :('
            />
        )
    }

    return (
        <S.Container>
            <InputField
                onSearch={setSearchTerm}
                placeholder='Buscar filme pelo nome'
            />

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
