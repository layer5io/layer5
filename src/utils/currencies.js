
export const Currencies = {
    USD: {
        name: "USD",
        symbol: "$",
        rate: 1,
        formatPrice: (price) =>
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            }).format(price),
    },
    EUR: {
        name: "EUR",
        symbol: "€",
        rate: 0.86,
        formatPrice: (price) =>
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            }).format(price * 0.86),
    },
};


// the price is in USD
export const formatAndConvertPrice = (price, currency) => {
    if (Currencies[currency]) {
        return Currencies[currency].formatPrice(price);
    }
    return price;
}
