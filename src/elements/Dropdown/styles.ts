import styled from '@emotion/styled'
import { DropdownItemProps, DropdownProps } from '@typing/Styles'

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownBtn = styled.button<DropdownProps>`
  cursor: pointer;
  width: ${({ long }) => (long ? '120px;' : '76px;')};
  height: ${({ long }) => (long ? '30px;' : '44px;')};

  background: #fff;
  font-size: ${({ theme }) => theme.font.font11};
  font-weight: 700;
  line-height: 15px;
  padding: 0;

  border: ${({ long, theme }) => (long ? `1px solid ${theme.palette.border};` : '1px solid transparent;')};
  border-radius: 4px;
  background: ${({ long, theme }) => !long && theme.palette.background};

  & > .flex-sb {
    padding-right: 10px;
  }

  & .queue {
    padding: 9px 0 6px 12px;
    ${({ long, theme }) => !long && `font-size: ${theme.font.font14}; font-weight: 600;`};
  }
`

export const Items = styled.div<DropdownItemProps>`
  margin-top: 4px;
  position: absolute;
  width: 120px;
  height: calc(${({ height }) => `${height} * 32px + 16px`});
  background: ${({ theme }) => theme.palette.color2};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0;

  & > div {
    width: 120px;
    height: 32px;
    font-size: ${({ theme }) => theme.font.font12};
    font-weight: 500;
    padding: 8px 14px;
    border-radius: 4px;

    &:hover {
      cursor: default;
      background-color: ${({ theme }) => theme.palette.color4};
    }
  }
`
