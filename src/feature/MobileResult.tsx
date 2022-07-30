import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '../components';
import { Trader } from '../types';
import { addPercent, formatDate } from '../utils';
import { Chart, Parameter } from './';
import { StyledFlag, Name, Percentage, NameBlock } from './TraderButton';

export const MobileResult: FC<{
    currentTrader: Trader,
    className?: string,
    selectTrader: (index: number) => void,
    traders: Trader[],
    selectedTrader: number,
}> = ({ currentTrader, className, selectTrader, traders, selectedTrader }) => {
    const { monthly_profit: monthly, total_profit: totlal, chart, flag, name } = currentTrader;

    const data = useMemo(() => {
        return chart.map((item, index) => {
            const date = formatDate(new Date(Date.now() - (index * 1000 * 60 * 60 * 24 * 4)))
            return { time: date, value: item }
        }).reverse();
    }, [chart]);

    return (
        <Box className={className}>
            <BorderBox>
                <TraderBlock>
                    <StyledFlag src={flag}></StyledFlag>
                    <NameBlock>
                        <Name>{name}</Name>
                        <Percentage>{monthly}</Percentage>
                    </NameBlock>
                </TraderBlock>
                <TopPanel>
                    <Parameter title="Monthly profit" result={addPercent(monthly)} />
                    <Parameter title="Total profit" result={addPercent(totlal)} />
                </TopPanel>
                <StyledChart data={data} />
                <ButtonBlock>
                    <Button>Copy Now</Button>
                </ButtonBlock>
            </BorderBox>
            <Selector>
                {traders.map((trader, index) => {
                    return <SelectDot onClick={() => selectTrader(index)} key={index} isSelected={index === selectedTrader} />
                })}
            </Selector>
        </Box>
    )
}

const Box = styled.div`
    flex-grow: 1;
`

const BorderBox = styled.div`
    padding: 6px 24px 40px;
    border: 1px solid #EBECEF;
    border-radius: 8px;
`

const TopPanel = styled.div`
    display: flex;
    margin-bottom: 24px;
    margin-top: 24px;

    > div {
        margin-right: 36px;
    }
`

const StyledChart = styled(Chart)`
    margin-bottom: 36px;
`

const ButtonBlock = styled.div`
   display: flex;
   justify-content: center;
`

const Selector = styled.div`
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const TraderBlock = styled.div`
    display: flex;
`

const SelectDot = styled.div<{ isSelected: boolean }>`
    background-color: #C8C8D5;
    border-radius: 26px;
    cursor: pointer;
    height: 10px;
    transition: width 0.3s ease;
    width: ${({ isSelected }) => isSelected ? '28' : '10'}px;

    & + &  {
        margin-left: 8px;
    }
`