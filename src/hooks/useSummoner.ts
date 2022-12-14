import { useQuery } from '@tanstack/react-query'
import { fetcher } from '@queries/Fetcher'
import { queryOptions } from '@queries/QueryOptions'
import { Summoner } from '@typing/Summoner'

export const useSummoner = ({ summoner, matchCategory, champion, lane, router }: Summoner) => {
  return useQuery([summoner, { matchCategory, champion, lane }], fetcher, {
    ...queryOptions,
    enabled: !!matchCategory,
    onError: ({ response }) => {
      // console.error('안녕!', response.data)
      router.push('/ErrorBoundary').then()
    },
  })
}
