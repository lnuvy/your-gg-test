import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { Wrap } from './styles'
import { ApiResult, MostChampion, MostLane } from '@typing/Api'
import Image from 'next/image'
import LaneRow from '@components/BottomTable/LaneRow'
import ChampionRow from '@components/BottomTable/ChampionRow'
import Skeleton from '@components/BottomTable/Skeleton'

interface BottomProps<T = any> {
  data: ApiResult
  setLane: Dispatch<SetStateAction<T>>
  setChampion: Dispatch<SetStateAction<T>>
}

const BottomTable = ({ data, setLane, setChampion }: BottomProps) => {
  const [mostLanes, setMostLanes] = useState([])
  const [mostChampions, setMostChampions] = useState([])

  useEffect(() => {
    if (data) {
      setMostLanes(data.mostLanes.slice(0, 2))
      setMostChampions(data.mostChampions.slice(0, 5))
    }
  }, [data])

  return (
    <Wrap>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>최근 30경기</th>
            <th>승률</th>
            <th>인분</th>
            <th>라인전</th>
            <th>KDA</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            <>
              {mostLanes.map((v: MostLane, i) => {
                return <LaneRow key={`${v.lane}_${i}`} v={v} onClick={() => setLane(v.lane)} />
              })}
              {mostChampions.map((v: MostChampion) => {
                return <ChampionRow key={v.id} v={v} onClick={() => setChampion(v.key)} />
              })}
            </>
          ) : (
            <Skeleton />
          )}
        </tbody>
      </table>
    </Wrap>
  )
}

export default BottomTable
