import { useState } from 'react';
import styled from 'styled-components';
import { useRandomTraders } from '../hooks';
import { ResultPanel, SelectPanel } from './';

export const TraderScreen = () => {
    const [selectedTrader, setSelectedTrader] = useState(0);

    const traders = useRandomTraders();

    const setTrader = (index: number) => {
        setSelectedTrader(index)
    }
    
    const currentTrader = traders[selectedTrader];

    return (
        <PanelBlock>
            <SelectPanel traders={traders} setTrader={setTrader} selectedTrader={selectedTrader}></SelectPanel>
            {currentTrader && <ResultPanel currentTrader={currentTrader}></ResultPanel>}
        </PanelBlock>
    )
}

const PanelBlock = styled.div`
    display: flex;
	justify-content: space-between;
`