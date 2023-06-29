export type TLeaderboardPlayer = {
  data: TLeaderboardPlayerData
}

export type TLeaderboardPlayerData = {
  id: number
  login: string
  numberOfGames: number
  dateOfLastGame: string
  points: number
}
