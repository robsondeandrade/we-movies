import { useMovieStore } from '@/data/stores/useMovieStore'
import { FeedbackToast } from '@/ui/components/FeedbackToast'
import { CheckoutSummary } from '@/ui/components/CheckoutSummary'

export default function CartPage() {
    const { toastInfo, hideToast } = useMovieStore()

    return (
        <>
            <CheckoutSummary />
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
