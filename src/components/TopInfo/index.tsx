import React, { useEffect, useState } from 'react'
import { Wrap } from './styles'

const rounding = (num: number) => {
  const fixed = num.toFixed(1)

  console.log('fixed', fixed)
  return fixed === '0.0' ? 0 : Number(fixed)
}

const TopInfo = ({ data }: any) => {
  console.log(data)

  const [role, setRole] = useState(0)
  const [laning, setLaning] = useState(0)
  const [kda, setKda] = useState(0)

  useEffect(() => {
    if (data) {
      setRole(rounding(data.role))
      setLaning(rounding(data.laning))
      setKda(rounding(data.kda))
    }
  }, [data])

  // if(!data) return <SkeletonBox width={} height={} />

  return <Wrap></Wrap>
}

export default TopInfo
