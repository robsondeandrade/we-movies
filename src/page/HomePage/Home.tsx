import { ListMovies } from '@/ui/components/ListMovies'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { FeedbackToast } from '@/ui/components/FeedbackToast'

export const HomePage = () => {
    const { toastInfo, hideToast } = useMovieStore()

    return (
        <>
            <ListMovies />
            <FeedbackToast
                setIsVisible={hideToast}
                isVisible={toastInfo.isVisible}
                message={toastInfo.message}
                color={toastInfo.color}
                duration={toastInfo.duration}
            />
        </>
    )
}
