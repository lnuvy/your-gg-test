import React from 'react'
import styled from '@emotion/styled'

const Svg = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

type Props = {
  onClick: React.MouseEventHandler<SVGSVGElement>
}

const SearchSvg = ({ onClick }: Props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.56348C16 4.40356 12.625 1 8.5 1C4.375 1 0.999998 4.40356 0.999998 8.56348C0.999998 12.7234 4.375 16.127 8.5 16.127C10.3214 16.127 11.9822 15.4787 13.2947 14.3711L17.6341 18.7568C17.7949 18.9189 17.9822 19 18.1965 19C18.384 19 18.5982 18.9189 18.7589 18.7568C19.0804 18.4596 19.0804 17.9466 18.7589 17.6225L14.4195 13.2099C15.4106 11.9133 16 10.3193 16 8.56348ZM2.58049 8.59089C2.58049 5.32239 5.23228 2.64816 8.47335 2.64816C11.7144 2.64816 14.3662 5.32239 14.3662 8.59089C14.3662 11.8594 11.7144 14.5336 8.47335 14.5336C5.23228 14.5336 2.58049 11.8594 2.58049 8.59089Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default SearchSvg
