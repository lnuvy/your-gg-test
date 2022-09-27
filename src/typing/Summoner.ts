import { NextRouter } from 'next/dist/shared/lib/router/router'

export type Summoner = {
  summoner: string | string[] | undefined
  matchCategory: string
  champion?: string | null
  lane?: string | null
  router: NextRouter
}
