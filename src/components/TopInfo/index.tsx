import React, { useEffect, useState } from 'react'
import { Wrap, LeftContent } from './styles'
import SkeletonBox from '@components/SkeletonBox'
import RightChart from '@components/TopInfo/RightChart'
import { ApiResult } from '@typing/Api'

const rounding = (num: number) => {
  if (num === 0) return 0
  const fixed = num.toFixed(1)
  return Number(fixed)
}

// TODOS: 타입 맞추기
const TopInfo = ({ data }: ApiResult) => {
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

  if (!data) return <SkeletonBox width={320} height={80} margin="50px 0" />

  return (
    <Wrap>
      <div className="flex-sb">
        <LeftContent>
          <div className="grid">
            <div className="bold">{role}</div>
            <div className="thin">인분</div>
          </div>

          <div className="grid">
            <div className="bold">{laning}</div>
            <div className="thin">라인전</div>
          </div>

          <div className="grid">
            <div className="bold">{kda}</div>
            <div className="thin">KDA</div>
          </div>
        </LeftContent>

        <RightChart data={data} />
      </div>
    </Wrap>
  )
}

export default TopInfo
