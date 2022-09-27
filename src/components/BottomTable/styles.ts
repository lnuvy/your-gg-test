import styled from '@emotion/styled'

export const Wrap = styled.div`
  width: 100%;

  & > table {
    width: 100%;
    thead {
      font-size: ${({ theme }) => theme.font.font10};
      font-weight: 500;
      line-height: 13.62px;
    }
  }
`
