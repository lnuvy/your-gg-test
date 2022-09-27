import styled from '@emotion/styled'
import { ImageBoxProps } from '@typing/Styles'

export const Wrap = styled.div`
  width: 100%;

  & > table {
    width: 100%;
    border-spacing: 0 10px;
    table-layout: fixed;

    thead th {
      font-size: ${({ theme }) => theme.font.font10};
      font-weight: 500;
    }

    tbody {
      tr {
        &:hover {
          background-color: ${({ theme }) => theme.palette.color4};
          cursor: default;
        }
      }
      td {
        padding: 0;
        text-align: center;
        font-weight: 700;
        font-size: ${({ theme }) => theme.font.font13};

        & > .two-lines {
          .lane {
            font-weight: 700;
            font-size: ${({ theme }) => theme.font.font12};
            //line-height: 16.34px;
          }

          .match-count {
            font-weight: 500;
            font-size: ${({ theme }) => theme.font.font10};
            //line-height: 16.34px;
          }
        }
      }
    }
  }
`

export const ChampRowImageBox = styled.div<ImageBoxProps>`
  width: 32px;
  height: 32px;
  background-image: url(${({ url }) => url});
  margin: 0 auto;
  background-size: 115%; // 검은 테두리 없애기위해 확대
  background-position: center;
  border-radius: 2px;

  & > svg  {
    background: #2D2B2E;
    padding: 2px;
    border-radius: 2px;
    position: relative;
    bottom: -18px;
    right: -9px;
  }
}
`
