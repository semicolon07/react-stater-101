import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/images/logo.svg';

const keyframe = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

const LogoImg = styled.img.attrs({
    src: logo
})`
    height: 40px;
    animation: ${keyframe} 10s linear infinite;
`;

const LogoTitle = styled.h3`
    color: #FFFFFF;
    text-decoration: none;
`;

const Logo: React.SFC = () => {
    return (
        <LogoWrapper>
            <LogoImg/>

            <LogoTitle>
                Awesome React!
            </LogoTitle>
        </LogoWrapper>
    );
}

export default Logo;