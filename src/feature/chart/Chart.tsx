import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';
import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ChartData } from '../../types';
import { CHART_SETTINGS } from './constants';

export const Chart: FC<{ data: ChartData[]; className?: string }> = ({
    data,
    className,
}) => {
    const chartContainerRef = useRef<HTMLElement>(null);
    const resizeObserver = useRef<ResizeObserver>();

    const [lineSeries, setLineSeries] = useState<ISeriesApi<'Line'>>();
    const [chart, setChart] = useState<IChartApi>();

    useEffect(() => {
        const chartContainer = chartContainerRef.current;

        if (!chartContainer) return;

        const newChart = createChart(chartContainer, CHART_SETTINGS);

        const lineSeries = newChart.addLineSeries({
            baseLineColor: '#595964',
            priceLineColor: '#595964',
            color: '#8A24F3',
        });

        newChart.timeScale().fitContent();

        setChart(newChart);
        setLineSeries(lineSeries);
    }, []);

    useEffect(() => {
        if (!data) return;

        lineSeries?.setData(data);
    }, [data, lineSeries]);

    // Resize chart on container resizes.
    useEffect(() => {
        resizeObserver.current = new ResizeObserver((entries) => {
            const containerWidth = chartContainerRef?.current?.offsetWidth;
            const { width: documentWidth } = entries[0].contentRect;

            if (!containerWidth) return;

            if (documentWidth > 1024) {
                chart?.applyOptions({ height: 400, width: containerWidth });
            } else {
                chart?.applyOptions({ height: 90, width: containerWidth });
            }

            chart?.timeScale().fitContent();
        });

        resizeObserver.current.observe(document.body);

        return () => resizeObserver?.current?.disconnect();
    }, [chart]);

    return (
        <StyledChart
            ref={chartContainerRef as React.RefObject<HTMLDivElement>}
            className={className}
        ></StyledChart>
    );
};

const StyledChart = styled.div`
    width: 100%;
    height: 100px;

    @media screen and (min-width: 1024px) {
        height: 400px;
    }

    .tv-lightweight-charts {
        position: absolute;
    }
`;
