import axios from 'axios'
import { QueryFunctionContext } from '@tanstack/query-core'

const BASE_URL = 'https://api.your.gg/kr/api/summoners'

export const fetcher = (ctx: QueryFunctionContext) => {
  const queryKey = ctx.queryKey[0]
  const params = ctx.queryKey.filter((k, i) => i !== 0)[0]

  return axios.get(`${BASE_URL}/${queryKey}`, { params: { ...(params as any) } }).then(({ data }) => data)
}
