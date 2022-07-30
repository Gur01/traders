import { FC } from 'react';
import styled, {css} from 'styled-components';
import { Flag } from '../components';
import { Trader } from '../types';
import {addPercentWithSign} from '../utils'

export const TraderButton: FC<{trader: Trader; onClick: () => void; isSelected: boolean; index: number}> = ({trader, isSelected, onClick, index}) => {
    return (
        <Box onClick={onClick} isSelected={isSelected}>
            <StyledFlag src={trader.flag}></StyledFlag>
            <NameBlock>
                <Name>{index + 1}. {trader.name}</Name>
                <Percentage>{addPercentWithSign(trader.monthly_profit)}</Percentage>
            </NameBlock>
        </Box>)
}

const Box = styled.div<{isSelected: boolean}>`
        cursor: pointer;
        display: flex;
        padding: 20px 24px;

        ${({isSelected}) => isSelected && css`
            background-color: #F5F7F9;
            border-radius: 25px;`
        }
`

export const StyledFlag = styled(Flag)`
    margin-right: 16px;
`

export const NameBlock = styled.div`
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
`

export const Name = styled.div`
    color: #080816;
`

export const Percentage = styled.div`
    color: #34B428;
`
