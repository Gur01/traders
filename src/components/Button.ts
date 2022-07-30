import styled from 'styled-components'

export const Button = styled.button`
    background-color: #8A24F3;
    border-radius: 6px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 16px 76px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #701BC8;
    }

    &:active {
        background-color: #4F118F;
    }
    
`