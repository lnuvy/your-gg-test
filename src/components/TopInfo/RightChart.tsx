import React, { useEffect, useState } from 'react'
import { tierHistoryArr } from '@typing/Api'
import { useRouter } from 'next/router'
import { queryClient } from '@pages/_app'

import { RightWrap } from './styles'

const RightChart = () => {
  const router = useRouter()
  const { summoner } = router.query

  const data = queryClient.getQueriesData([summoner, {}])[0][1]

  const [history, setHistory] = useState<tierHistoryArr | []>([])

  useEffect(() => {
    if (data) setHistory(data?.tierHistory)
  }, [data])

  console.log(history)

  return <RightWrap></RightWrap>
}

export default RightChart
