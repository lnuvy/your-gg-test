import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      싹지워버리기
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
