import { FC } from 'react';
import styled from 'styled-components';
import { TraderButton } from '../feature';
import { Trader } from '../types';

export const SelectPanel: FC<{traders: Trader[], setTrader: (index: number) => void, selectedTrader: number}> = ({traders, setTrader, selectedTrader}) => {
    return (
        <Box>
            {traders.map((trader, index) => {
                return <TraderButton onClick={() => setTrader(index)} key={index} trader={trader} isSelected={selectedTrader === index}/>
            })}
        </Box>
    )
}

const Box = styled.div`
    flex-shrink: 0;
    margin-right: 30px;
    width: 295px;
`
