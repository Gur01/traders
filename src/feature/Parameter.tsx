import { FC } from 'react';
import styled from 'styled-components';

export const Parameter: FC<{ title: string, result: string; }> = ({ title, result }) => {
    return (
        <Box>
            <Title>{title}</Title>
            <Result>{result}</Result>
        </Box>)
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    color: rgba(10, 7, 30, 0.4);
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 8px;
`

const Result = styled.div`
    color: #080816;
    font-family: 'Gotham Pro';
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
`