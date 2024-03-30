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
            title='Compra realizada com sucesso!'
            imageUrl='/images/successful-purchase.png'
            buttonText='VOLTAR'
            onButtonClick={redirectToHomePage}
        />
    )
}
