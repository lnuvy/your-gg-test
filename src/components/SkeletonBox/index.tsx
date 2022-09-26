import React from 'react'
import { Wrap } from './styles'

interface Skeleton {
  width: number
  height: number
  margin?: string | undefined
}

const SkeletonBox = ({ width, height, margin }: Skeleton) => {
  return <Wrap width={width} height={height} margin={margin} />
}

export default SkeletonBox
