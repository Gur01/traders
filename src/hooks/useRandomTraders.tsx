import { useEffect, useState } from 'react';
import { getTraders } from '../api';
import { Trader } from '../types';
import { randomFromArray } from '../utils';

export const useRandomTraders = () => {
    const [allTraders, setAllTraders] = useState<Trader[]>([]);
    const [traders, setTraders] = useState<Trader[]>([]);

    useEffect(()=> {
        const allTraders = getTraders();

        setAllTraders(allTraders);
    }, [])

    useEffect(()=> {
        const result = randomFromArray(allTraders, 4);
        
        setTraders(result)
    }, [allTraders]);

    return traders;
}