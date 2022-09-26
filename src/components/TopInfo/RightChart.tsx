import React, { useEffect, useState } from 'react'
import { HistoryItem, tierHistory } from '@typing/Api'
import { useRouter } from 'next/router'
import { queryClient } from '@pages/_app'
import { RightWrap } from './styles'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export const options = {
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    point: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
}

const RightChart = () => {
  const router = useRouter()
  const { summoner } = router.query

  const data = queryClient.getQueriesData([summoner, {}])[0][1]

  const [history, setHistory] = useState<any>({})

  useEffect(() => {
    console.log(data)
    let objCopy: any
    objCopy = Object.assign({}, data)

    if (objCopy.tierHistory.length > 0) {
      console.log(objCopy.tierHistory)
      const chartData = {
        labels: objCopy.tierHistory.map((v: HistoryItem) => v.updated),
        datasets: [
          {
            label: 'Dataset 1',
            data: objCopy.tierHistory.map((v: HistoryItem) => v.leaguePoint),
            borderColor: '#318EEF',
            backgroundColor: '#318EEF',
            pointRadius: 0,
            pointHitRadius: 1,
            borderWidth: 2,
            hitRadius: 100,
          },
        ],
      }
      setHistory(chartData)
    }
  }, [data])

  console.log(history)

  if (!history.hasOwnProperty('labels')) return null

  return (
    <RightWrap>
      <Line options={options} data={history} />
    </RightWrap>
  )
}

export default RightChart
