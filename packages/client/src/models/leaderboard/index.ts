export type TLeaderboardPlayer = {
  data: TLeaderboardPlayerData
}

export type TLeaderboardPlayerData = {
  login: string
  numberOfGames: number
  dateOfLastGame: string
  points: number
}
