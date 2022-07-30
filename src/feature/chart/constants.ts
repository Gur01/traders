import { CrosshairMode, ChartOptions, DeepPartial } from 'lightweight-charts';

export const CHART_SETTINGS: DeepPartial<ChartOptions> = {
    layout: {
        textColor: '#81818D',
        fontSize: 16,
    },
    grid: {
        vertLines: {
            color: 'transparent',
        },
        horzLines: {
            color: 'transparent',
        },
    },
    crosshair: {
        mode: CrosshairMode.Normal,
    },
    timeScale: {
        borderColor: '#DDE0E9',
    },
};
