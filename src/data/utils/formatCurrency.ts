export const formatCurrency = (price: number) => {
    const priceFixed = price.toFixed(2)

    const priceNumber = parseFloat(priceFixed)

    const priceFormatted = priceNumber.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return priceFormatted
}
