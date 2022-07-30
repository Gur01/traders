export interface Trader {
    capital: string;
    chart: number[];
    flag: string;
    monthly_profit: number;
    name: string;
    total_profit: number;
}

export interface ChartData { time: string, value: number }

