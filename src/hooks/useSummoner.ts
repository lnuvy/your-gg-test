import { useQuery } from '@tanstack/react-query'
import { fetcher } from '@queries/Fetcher'
import { queryOptions } from '@queries/QueryOptions'
import { Summoner } from '@typing/Summoner'

export const useSummoner = ({ summoner, matchCategory, champion, lane, router }: Summoner) => {
  console.log(summoner, matchCategory, champion, lane)
  return useQuery([summoner, { matchCategory, champion, lane }], fetcher, {
    ...queryOptions,
    onError: ({ response }) => {
      console.error('안녕!', response.data)
      router.push('/ErrorBoundary')
    },
  })
}
