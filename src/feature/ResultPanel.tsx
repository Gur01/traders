import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '../components';
import { Trader } from '../types';
import { addCurrency, addPercent, formatDate } from '../utils';
import { Chart, Parameter } from './';

export const ResultPanel: FC<{ currentTrader: Trader; className?: string }> = ({
    currentTrader,
    className,
}) => {
    const {
        monthly_profit: monthly,
        total_profit: totlal,
        capital,
        chart,
    } = currentTrader;

    const data = useMemo(() => {
        return chart
            .map((item, index) => {
                const date = formatDate(
                    new Date(Date.now() - index * 1000 * 60 * 60 * 24 * 4),
                );
                return { time: date, value: item };
            })
            .reverse();
    }, [chart]);

    return (
        <Box className={className}>
            <TopPanel>
                <Parameter
                    title="Monthly profit"
                    result={addPercent(monthly)}
                />
                <Parameter title="Total profit" result={addPercent(totlal)} />
                <Parameter
                    title="In management"
                    result={addCurrency(capital, 'usd')}
                />
                <Button>Copy Now</Button>
            </TopPanel>
            <Chart data={data} />
        </Box>
    );
};

const Box = styled.div`
    border-radius: 8px;
    border: 1px solid #ebecef;
    flex-grow: 1;
    padding: 28px 24px 24px;
`;

const TopPanel = styled.div`
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
`;
