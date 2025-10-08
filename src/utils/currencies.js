export const Currencies = {
    USD: {
        name: "USD",
        symbol: "$",
        rate: 1,
        formatPrice: (price,roundForDisplay=false) =>
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: roundForDisplay ? 0 : 2,
                maximumFractionDigits: roundForDisplay ? 0 : 2,
            }).format(price),
    },
    EUR: {
        name: "EUR",
        symbol: "€",
        rate: 0.86,
        formatPrice: (price,roundForDisplay=false) =>
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: roundForDisplay ? 0 : 2,
                maximumFractionDigits: roundForDisplay ? 0 : 2,
            }).format(price * 0.86),
    },
    INR: {
        name: "INR",
        symbol: "₹",
        rate: 88.32,
        formatPrice: (price,roundForDisplay=false) =>
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: roundForDisplay ? 0 : 2,
                maximumFractionDigits: roundForDisplay ? 0 : 2,
            }).format(price * 88),
    },
};

// the price is in USD
export const formatAndConvertPrice = (price, currency) => {
    if (Currencies[currency]) {
        return Currencies[currency].formatPrice(price);
    }
    return price.toFixed(2);
};

export const formatSliderPrice = (price, currency) => {
    const currencyConfig = Currencies[currency] || { symbol: "$", rate: 1 };
    const { symbol, rate } = currencyConfig;
    
    const convertedPrice = price * rate;
    
    const formattedPrice = convertedPrice.toFixed(2);
    
    if (formattedPrice.endsWith(".00")) {
        return `${symbol}${Math.floor(convertedPrice)}`;
    }
    
    return `${symbol}${formattedPrice}`;
};