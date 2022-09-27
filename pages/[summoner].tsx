import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Dropdown from '@elements/Dropdown'
import { queueArray } from '@constant/Queue'
import TopInfo from '@components/TopInfo'
import { useSummoner } from '@hooks/useSummoner'
import { useRouter } from 'next/router'
import Hr from '@elements/Hr'
import BottomTable from '@components/BottomTable'
import { queryClient } from '@pages/_app'

const Summoner: NextPage = () => {
  const router = useRouter()
  const { summoner } = router.query

  const [name, setName] = useState('')
  const [matchCategory, setMatchCategory] = useState('')
  const [lane, setLane] = useState(null)
  const [champion, setChampion] = useState(null)

  const { data } = useSummoner({ summoner, matchCategory, champion, lane, router })

  // 로컬스토리지에 matchCategory 값이 들어있으면 주입, 없으면 SoloRank 로 세팅
  useEffect(() => {
    const match = localStorage.getItem('match')
    console.log(match)
    if (match !== null) {
      setMatchCategory(match)
    } else {
      localStorage.setItem('match', 'SoloRank')
      setMatchCategory('SoloRank')
    }
  }, [])

  // api 데이터에 들어있는 Name 으로 교체
  useEffect(() => {
    if (data) setName(data.name)
  }, [data])

  // lane, champion 변경될때마다 서버 데이터 갱신
  useEffect(() => {
    queryClient
      .invalidateQueries([summoner, {}])
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        // console.log(err)
      })
  }, [lane, champion])

  // if (!router.isFallback && !summoner) {
  //   return <div />
  // }

  return (
    <div className="global">
      <Head>
        <title>{name || summoner} | 검색결과</title>
        <meta name={`${name} 검색 결과`} content="잘부탁드립니다" />
        <link rel="icon" href="/Chart.png" />
      </Head>

      <H1>{name || summoner}</H1>

      <div className="flex-s">
        <Dropdown long items={queueArray} setState={setMatchCategory}>
          {matchCategory}
        </Dropdown>
      </div>

      <TopInfo data={data} />
      <Hr />

      <BottomTable data={data} setLane={setLane} setChampion={setChampion} />
    </div>
  )
}

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.font.font1};
  font-weight: 700;
  margin: 0 0 17px;
  text-align: center;
`

export default Summoner
