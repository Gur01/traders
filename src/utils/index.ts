export const randomFromArray = <T extends unknown>(
    arr: T[],
    number: number,
) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, number);
};

export const formatNumber = (number: number | string) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const addPercent = (number: number | string) =>
    formatNumber(number) + '%';

export const addCurrency = (number: number | string, currency: 'usd') =>
    `${formatNumber(number)} ${currency.toUpperCase()}`;

const padTo2Digits = (number: number) => {
    return number.toString().padStart(2, '0');
};

export const formatDate = (date: Date) => {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth()),
        padTo2Digits(date.getDate()),
    ].join('-');
};

export const addPercentWithSign = (number: number | string) => {
    const num = typeof number === 'string' ? parseInt(number) : number;
    let sign = num < 0 ? '-' : '+';

    return `${sign} ${formatNumber(number)}`;
};
