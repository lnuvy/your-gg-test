import React from 'react'
import { Wrap } from './styles'

// TODOS: 타입맞추기
const BottomTable = ({ data }: any) => {
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
        <tbody></tbody>
      </table>
    </Wrap>
  )
}

export default BottomTable

const EachRow = () => {
  return (
    <tr>
      <td></td>
    </tr>
  )
}
