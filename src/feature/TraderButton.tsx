import { FC } from 'react';
import styled, {css} from 'styled-components';
import { Flag } from '../components';
import { Trader } from '../types';

export const TraderButton: FC<{trader: Trader, onClick: () => void, isSelected: boolean;}> = ({trader, isSelected, onClick}) => {
    return (
        <Box onClick={onClick} isSelected={isSelected}>
            <StyledFlag src={trader.flag}></StyledFlag>
            <NameBlock>
                <Name>{trader.name}</Name>
                <Percentage>{trader.monthly_profit}</Percentage>
            </NameBlock>
        </Box>)
}

const Box = styled.div<{isSelected: boolean}>`
        padding: 20px 24px;
        display: flex;
        cursor: pointer;

        ${({isSelected}) => isSelected && css`
            background-color: #F5F7F9;
            border-radius: 25px;`
        }
`

const StyledFlag = styled(Flag)`
    margin-right: 16px;
`

const NameBlock = styled.div`

`
const Name = styled.div`
    color: #080816;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
`

const Percentage = styled.div`
    color: #34B428;
`
