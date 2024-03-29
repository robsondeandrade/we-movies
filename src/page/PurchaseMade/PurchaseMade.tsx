import { ContainerFeedback } from '@/ui/components/ContainerFeedback'
import { useNavigate } from 'react-router-dom'

export const PurchaseMade = () => {
    const navigate = useNavigate()

    const redirectToHomePage = () => {
        navigate('/')
    }

    return (
        <ContainerFeedback
            fitType='contain'
            width={'294.96px'}
            height={'307px'}
            title='Parece que não há nada por aqui :('
            imageUrl='/images/successful-purchase.png'
            buttonText='VOLTAR'
            onButtonClick={redirectToHomePage}
        />
    )
}
