import React, { useCallback } from 'react'
import { MostChampion } from '@typing/Api'
import Image from 'next/image'
import { ChampRowImageBox } from '@components/BottomTable/styles'
import TopSvg from '@elements/WhiteSvg/TopSvg'
import JugSvg from '@elements/WhiteSvg/JugSvg'
import AdcSvg from '@elements/WhiteSvg/AdcSvg'
import MidSvg from '@elements/WhiteSvg/MidSvg'
import SupSvg from '@elements/WhiteSvg/SupSvg'

const ChampionRow = ({ v, onClick }: { v: MostChampion; onClick: () => void }) => {
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
        <ChampRowImageBox url={v.imageUrl}>
          {/*<Image src={`/svg/${v.lane}.svg`} width={14} height={14} />*/}
          {v.lane === 'Top' && <TopSvg />}
          {v.lane === 'Jug' && <JugSvg />}
          {v.lane === 'Mid' && <MidSvg />}
          {v.lane === 'Adc' && <AdcSvg />}
          {v.lane === 'Sup' && <SupSvg />}
        </ChampRowImageBox>
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

export default ChampionRow
