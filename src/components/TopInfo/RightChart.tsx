import React, { useEffect, useState } from 'react'
import { HistoryItem } from '@typing/Api'
import { useRouter } from 'next/router'
import { queryClient } from '@pages/_app'
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

const RightChart = () => {
  const router = useRouter()
  const { summoner } = router.query

  const data = queryClient.getQueriesData([summoner, {}])[0][1]

  const [history, setHistory] = useState<any>({})
  const [customOptions, setCustomOptions] = useState({})

  useEffect(() => {
    let objCopy: any
    objCopy = Object.assign({}, data)

    if (objCopy.tierHistory.length > 0) {
      const chartData = {
        // labels: objCopy.tierHistory.map((v: HistoryItem) => dayjs(v.updated).format('YY.MM.DD')),
        labels: objCopy.tierHistory.map((v: HistoryItem) => v.tier),
        datasets: [
          {
            data: objCopy.tierHistory.map((v: HistoryItem) => v.leaguePoint),
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
    let copy: any
    copy = Object.assign({}, data)

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
            intersect: false, // 수평으로 hover 시 툴팁 표시되게
            mode: 'index',
            // xAlign: 'top',
            // yAlign: 'bottom',
            displayColors: false, // 색상박스 안나오게
            caretSize: 1,

            callbacks: {
              // https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks
              afterLabel: (context: any) => {
                const i = context.dataIndex
                return dayjs(copy.tierHistory[i].updated).format('YY.MM.DD')
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
