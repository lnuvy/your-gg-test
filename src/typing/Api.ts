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
