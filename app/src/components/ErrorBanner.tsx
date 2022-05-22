import React from 'react';
import styled from 'styled-components';

export interface ErrorBannerProps {
    message: string;
}

const StyledDiv = styled.div`
    background: #f00;
    color: #fff;
    height: 5%;
    padding: 5px;
    position: absolute;
    text-align: center;
    top: 0px;
    width: 92.5%;
`

export const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
    return (
        <StyledDiv>
            {message}
        </StyledDiv>
    )
}