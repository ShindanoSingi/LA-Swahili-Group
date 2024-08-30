// Function to format the amount in US dollars.
export const formatDollar = (amount) => {
    return amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

// Format the phone number from 2077133345 to 207-713-3345
export const formatPhoneNumber = (phoneNumberString) => {
    return phoneNumberString.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

// Function to format the date in a readable format
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
}