import { FC } from 'react';
import styled from 'styled-components';

export const Flag: FC<{ src: string; className?: string }> = ({
    src,
    className,
}) => {
    return (
        <Box className={className}>
            <FlagImage src={src} />
        </Box>
    );
};

export const Box = styled.div`
    border-radius: 50%;
    height: 48px;
    overflow: hidden;
    width: 48px;
`;

export const FlagImage = styled.img`
    height: 100%;
`;
