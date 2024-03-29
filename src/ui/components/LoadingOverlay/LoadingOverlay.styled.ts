import styled, { css, keyframes } from 'styled-components'

const rotation = keyframes`
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
`

const rotateAnimation = css`
    animation: ${rotation} 1.3s linear infinite;
`

export const Spinner = styled.span`
    position: relative;
    width: 62.25px;
    height: 62.25px;
    margin-top: 1rem;
    border-radius: 50%;
    background: conic-gradient(
        from 90deg at 50% 50%,
        rgba(128, 128, 128, 0.0001) -46.17deg,
        #ffffff 313.55deg,
        rgba(128, 128, 128, 0.0001) 313.83deg,
        #ffffff 673.55deg
    );
    box-shadow: 0 0 100px -50px black;
    ${rotateAnimation};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: ${({ theme }) => theme.colors.primary};
        border: 7px solid ${({ theme }) => theme.colors.primary};
    }
`
