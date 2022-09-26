import styled from '@emotion/styled'

export const Wrap = styled.div`
  margin-top: 50px;
  width: 100%;
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
    height: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    & > .bold {
      line-height: 21.79px;
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
  width: 180px;
  height: 78px;
`
