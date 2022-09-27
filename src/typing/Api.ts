export type HistoryItem = {
  division: string
  leaguePoint: number
  loses: number
  normalizedPoint: number
  tier: string
  updated: number
  wins: number
}

export type tierHistory = HistoryItem[]

export type Competitor = {
  name: string
  tier: string
  type: string
}

export type NamedSummoner = {
  afreecaTv: string
  created: number
  displayCount: number
  displayName: string
  doyouTv: string
  id: number
  imageUrl: string
  lane: string
  lp: number
  realName: string
  region: string
  secondName: string
  summonerId: string
  team: string
  twitch: string
  twitter: string
  type: string
  updated: number
  youtube: string
}

// depth 가 많은 배열들은 any로 처리했습니다 죄송합니다!
export type ApiResult =
  | {
      championVideo: string
      competitor: Competitor
      division: string
      icon: string
      kda: number
      laning: number
      lose: number
      lp: number
      matchCategory: string
      mostChampions: any
      mostLane: string
      mostLanes: any
      name: string
      namedSummoner?: NamedSummoner
      recentWinRate: number
      region: string
      role: number
      teamLuck: number
      tier: string
      tierHistory: tierHistory
      type: string
      viewCount: number
      vsNamedSummoners: any
      win: number
      winRate: number
    }
  | any

export type MostLane = {
  isAverage: boolean
  kda: number
  lane: string
  laning: number
  matchCount: number
  performance: any
  pickRate: number
  radarGraph: any
  role: number
  winRate: number
}

export type MostChampion = {
  id: number
  imageUrl: string
  isAverage: boolean
  kda: number
  key: string
  lane: string
  laning: number
  matchCount: number
  name: string
  performance: any
  pickRate: number
  radarGraph: any
  role: number
  winRate: number
}
