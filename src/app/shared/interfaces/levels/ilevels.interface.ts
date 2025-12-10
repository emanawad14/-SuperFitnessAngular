export interface ResponseDifficultyLevel {
  message: string
  totalLevels: number
  difficulty_levels: DifficultyLevel[]
}

export interface DifficultyLevel {
  id: string
  name: string
}
