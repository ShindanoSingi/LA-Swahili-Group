// Function to format the amount in US dollars.
export const formatDollar = (amount) => {
    return amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}