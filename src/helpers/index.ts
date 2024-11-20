export const formatCurrency = (quantity: number) => Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(quantity);