import React, { useCallback } from 'react'
import { MostLane } from '@typing/Api'
import Image from 'next/image'

const LaneRow = ({ v, onClick }: { v: MostLane; onClick: () => void }) => {
  const rounding = useCallback(
    (num: number, digits: number) => {
      if (!num) return 0

      return Number(num.toFixed(digits))
    },
    [v],
  )

  return (
    <tr onClick={onClick}>
      <td>
        <Image src={`/svg/${v.lane}.svg`} width={32} height={32} />
      </td>
      <td>
        <div className="flex-c-s two-lines">
          <span className="lane">{v.lane}</span>
          <span className="match-count">{v.matchCount} 경기</span>
        </div>
      </td>
      <td>{Math.round(v.winRate)} %</td>
      <td>{rounding(v.role, 2)}</td>
      <td>{rounding(v.laning, 1)}</td>
      <td>{rounding(v.kda, 2)}</td>
    </tr>
  )
}

export default LaneRow
