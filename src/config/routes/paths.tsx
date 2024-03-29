import CartPage from '@/page/CartPage/Cartpage'
import { PurchaseMade } from '@/page/PurchaseMade/PurchaseMade'

export const PATHS = [
    {
        path: '/carrinho',
        element: <CartPage />,
    },
    {
        path: '/compra-realizada',
        element: <PurchaseMade />,
    },
]
