import styled from '@emotion/styled'

type WrapProps = {
  width: number
  height: number
  margin?: string
}

export const Wrap = styled.div<WrapProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => (margin ? `${margin};` : '0;')};
  overflow: hidden;
  position: relative;

  background-color: ${({ theme }) => theme.palette.color4};

  @keyframes loading {
    0% {
      transform: translateX(${({ width }) => `-${width}px;`});
    }
    100% {
      transform: translateX(500px);
    }
  }
  //&::before {
  //  content: '';
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  width: 30px;
  //  height: 100%;
  //  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  //  animation: loading 2s infinite linear;
  //}

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      #fafafa,
      rgba(255, 255, 255, 0)
    );

    transform: translateX(-100%);
    animation: loading 2.4s linear 0.5s infinite;
    content: '';
  }
`
