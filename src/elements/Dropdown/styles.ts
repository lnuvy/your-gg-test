import styled from '@emotion/styled'

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownBtn = styled.button`
  cursor: pointer;
  width: 120px;
  height: 30px;
  background: #fff;
  font-size: ${({ theme }) => theme.font.font11};
  font-weight: 700;
  line-height: 15px;
  padding: 0;

  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 4px;

  & > .flex-sb {
    padding-right: 10px;
  }

  & .queue {
    padding: 9px 0 6px 12px;
  }
`

export const Items = styled.div`
  margin-top: 4px;
  position: absolute;
  width: 120px;
  height: 96px;
  background: ${({ theme }) => theme.palette.color2};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

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
