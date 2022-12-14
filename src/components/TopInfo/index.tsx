import React, { useEffect, useState } from 'react'
import { Wrap, LeftContent } from './styles'
import RightChart from '@components/TopInfo/RightChart'
import { ApiResult } from '@typing/Api'
import TopSkeleton from '@components/TopInfo/TopSkeleton'

const rounding = (num: number) => {
  if (num === 0) return 0
  const fixed = num.toFixed(1)
  return Number(fixed)
}

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
    return () => {}
  }, [data])

  if (!data) return <TopSkeleton />

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
