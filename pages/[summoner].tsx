import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Dropdown from '@elements/Dropdown'
import { queueArray } from '@constant/Queue'
import TopInfo from '@components/TopInfo'
import { useSummoner } from '@hooks/useSummoner'
import { useRouter } from 'next/router'

const Summoner: NextPage = () => {
  const router = useRouter()
  const { summoner } = router.query

  const [name, setName] = useState('')
  const [matchCategory, setMatchCategory] = useState('SoloRank')
  const [champion, setChampion] = useState(null)
  const [lane, setLane] = useState(null)

  const { data, isFetching } = useSummoner({ summoner, matchCategory, champion, lane })

  useEffect(() => {
    if (data) {
      setName(data.name)
    }
  }, [data])

  return (
    <div className="global">
      <Head>
        <title>{name} 검색결과</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <H1>{name || summoner}</H1>

      <div className="flex-s">
        <Dropdown items={queueArray} setState={setMatchCategory}>
          {matchCategory}
        </Dropdown>
      </div>

      {/*<SkeletonBox width={100} height={100} />*/}
      <TopInfo data={data} />
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