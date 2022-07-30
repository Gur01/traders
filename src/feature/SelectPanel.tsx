import { FC } from 'react';
import styled from 'styled-components';
import { TraderButton } from '../feature';
import { Trader } from '../types';

export const SelectPanel: FC<{traders: Trader[], selectTrader: (index: number) => void, selectedTrader: number, className?: string}> = ({traders, selectTrader, selectedTrader, className}) => {
    return (
        <Box className={className}>
            {traders.map((trader, index) => {
                return <TraderButton index={index} onClick={() => selectTrader(index)} key={index} trader={trader} isSelected={selectedTrader === index}/>
            })}
        </Box>
    )
}

const Box = styled.div`
    flex-shrink: 0;
    margin-right: 30px;
    width: 295px;
`
