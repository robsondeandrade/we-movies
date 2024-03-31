import CartPage from '@/page/CartPage/Cartpage'
import { PurchaseMade } from '@/page/PurchaseMade'

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
