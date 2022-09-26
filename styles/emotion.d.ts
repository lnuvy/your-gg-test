import Theme from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    font: {
      font1: string
      font16: string
      font14: string
      font13: string
      font12: string
      font11: string
    }
    palette: {
      background: string
      border: string
      color1: string
      color2: string
      color3: string
      color4: string
    }
  }
}
