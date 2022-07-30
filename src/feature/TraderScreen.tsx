import { useState } from 'react';
import styled from 'styled-components';
import { useRandomTraders } from '../hooks';
import { ResultPanel, SelectPanel, MobileResult } from './index';

export const TraderScreen = () => {
    const [selectedTrader, setSelectedTrader] = useState(0);

    const traders = useRandomTraders();

    const selectTrader = (index: number) => {
        setSelectedTrader(index)
    }
    
    const currentTrader = traders[selectedTrader];

    return (
        <PanelBlock>
            <StyledSelectPanel traders={traders} selectTrader={selectTrader} selectedTrader={selectedTrader}></StyledSelectPanel>
            {currentTrader && <StyledResultPanel currentTrader={currentTrader}></StyledResultPanel>}
            {currentTrader && <StyledMobileResult traders={traders} currentTrader={currentTrader} selectedTrader={selectedTrader} selectTrader={selectTrader}></StyledMobileResult>}
        </PanelBlock>
    )
}

const PanelBlock = styled.div`
    display: flex;
	justify-content: space-between;
`

const StyledSelectPanel = styled(SelectPanel)`
    display: none;

    @media screen and (min-width: 1024px) {
        display: block;
    }
`

const StyledResultPanel = styled(ResultPanel)`
    display: none;

    @media screen and (min-width: 1024px) {
        display: block;
    }
`

const StyledMobileResult = styled(MobileResult)`
    display: block;
    
    @media screen and (min-width: 1024px) {
        display: none;
    }
`

