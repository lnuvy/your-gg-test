import styled from '@emotion/styled'

export const Wrap = styled.div`
  margin: 50px 0;
  width: 100%;
  height: 90px;
`

export const LeftContent = styled.div`
  margin-right: 30px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .grid {
    width: 100%;
    height: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 3px 0;

    & > .bold {
      font-weight: 700;
      font-size: ${({ theme }) => theme.font.font16};
    }
    & > .thin {
      font-weight: 500;
      font-size: ${({ theme }) => theme.font.font11};
    }
  }
`

export const RightWrap = styled.div`
  & > canvas {
    width: 180px;
    height: 90px !important;
  }
`
