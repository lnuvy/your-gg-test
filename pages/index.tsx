import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import { useState } from 'react'

const Home: NextPage = () => {
  const [summoner, setSummoner] = useState<string>('Hide on Bush')

  return (
    <div>
      <Head>
        <title>{summoner} 검색결과</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Test />
    </div>
  )
}

const Test = styled.div`
  background-color: ${({ theme }) => theme.palette.color3};
  width: 100px;
  height: 100px;
`

export default Home
