import React from 'react'
import { NextPage } from 'next'
import Title from '@components/Title'
import Head from 'next/head'
import styled from '@emotion/styled'

const Home: NextPage = () => {
  return (
    <div className="title-global">
      <Head>
        <title>your.gg 테스트 - 이한울</title>
        <meta name="이한울 your.gg 코딩테스트" content="next.js 를 이용한" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-c-c" style={{ width: '100%', padding: '2rem' }}>
        <Title />
        <OtherWords className="flex-c-center">
          <div>
            안녕하세요. 이번 FE 개발자에 지원한 이한울 입니다. <br />
            지원한 곳 중에서 가장 취업하고 싶었던 곳에서 서류합격을 받아 너무 기쁜 마음으로 즐겁게 코딩했습니다. 어딘가
            엉성하고, 기술적으로 부족한 점도 많았고, 클린코드도 아니겠지만 제가 할 수 있는 최선을 다해서 작업했습니다.
            <br />
            잘부탁드립니다! :)
          </div>
          <span>사용 라이브러리: axios, react-query, @emotion, chart.js, react-chartjs-2, dayjs</span>
        </OtherWords>
      </div>
    </div>
  )
}

const OtherWords = styled.div`
  width: 560px;
  background-color: ${({ theme }) => theme.palette.color2};
  margin: 7rem 0;
  padding: 2rem;
  border-radius: 4px;
  line-height: 24px;
  opacity: 0.1;
  transition: 0.3s;
  z-index: 0;
  &:hover {
    opacity: 1;
  }

  & > div {
    margin: 0 auto 0.5rem;
  }
  & > span {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.palette.color1};
    font-size: ${({ theme }) => theme.font.font11};
  }
`

export default Home
