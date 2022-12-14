import React, { useEffect, useState } from 'react'
import { ApiResult, HistoryItem } from '@typing/Api'
import { useRouter } from 'next/router'
import { RightWrap } from './styles'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js'
import dayjs from 'dayjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const options = {
  scales: {
    x: { display: false },
    y: { display: false },
  },
  hover: {
    intersect: false,
    mode: 'index',
  },
}

const RightChart = ({ data }: ApiResult) => {
  const router = useRouter()
  const { summoner } = router.query

  // const data = queryClient.getQueriesData([summoner, {}])[0][1]

  const [history, setHistory] = useState<any>({})
  const [customOptions, setCustomOptions] = useState({})

  useEffect(() => {
    if (data.tierHistory.length > 0) {
      const chartData = {
        // labels: objCopy.tierHistory.map((v: HistoryItem) => dayjs(v.updated).format('YY.MM.DD')),
        labels: data.tierHistory.map((v: HistoryItem) => v.tier + ' ' + v.division),
        datasets: [
          {
            data: data.tierHistory.map((v: HistoryItem) => v.leaguePoint),
            borderColor: '#318EEF',
            backgroundColor: '#318EEF',
            pointRadius: 0,
            pointHitRadius: 5,
            borderWidth: 2,
            hitRadius: 4,
            hoverRadius: 4,
            pointHoverRadius: 4,
          },
        ],
      }
      setHistory(chartData)
    }

    return () => {
      setHistory({})
    }
  }, [data])

  useEffect(() => {
    if (history.hasOwnProperty('labels')) {
      const newOptions = {
        ...options,
        plugins: {
          title: { display: false },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            titleColor: '#2d2b2e',
            // titleFont: { family: 'Noto Sans', size: 11, weight: 'bold' },
            bodyColor: '#2d2b2e',
            intersect: false, // ???????????? hover ??? ?????? ????????????
            mode: 'index',
            // xAlign: 'top',
            // yAlign: 'bottom',
            displayColors: false, // ???????????? ????????????
            caretSize: 1,

            callbacks: {
              // https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks
              afterLabel: (context: any) => {
                const i = context.dataIndex
                return dayjs(data.tierHistory[i].updated).format('YY.MM.DD')
              },
              label: (context: any) => context.formattedValue + ' LP',
            },
          },
        },
      }
      setCustomOptions(newOptions)
    }
  }, [history])

  if (!history.hasOwnProperty('labels')) return null

  return (
    <RightWrap>
      <Line options={customOptions} data={history} />
    </RightWrap>
  )
}

export default RightChart
