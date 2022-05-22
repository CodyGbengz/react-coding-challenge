import React from 'react';
import styled, { keyframes } from 'styled-components';
import useTheme from '../hooks/useTheme'

const spinnerKeyFrame = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const StyledSpinner = styled.div`
    .loadingSpinner {
        animation: ${spinnerKeyFrame} 1s linear infinite;
        border: 10px solid ${(props) => props.theme.secondary}; 
        border-top: 10px solid ${(props) => props.theme.primary}; 
        border-radius: 50%;
        height: 50px;
        width: 50px;
    }
`
const SpinnerWrapper = styled.section`
    align-content: center;
    display: flex;
    justify-content: center;
    margin: 100px 0
`

export const Spinner: React.FC = () => {
    const { theme } = useTheme();
    return (
        <SpinnerWrapper>
            <StyledSpinner theme={theme}> 
                <div className='loadingSpinner'></div>
            </StyledSpinner>
        </SpinnerWrapper>
    )
}
