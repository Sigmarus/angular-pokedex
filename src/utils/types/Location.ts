import { SimpleResource } from "./SimpleResource"

export interface Location {
    areas: SimpleResource[]
    game_indices: {
        game_index: number
        generation: SimpleResource
    }[]
    id: number
    name: string
    names: {
        language: SimpleResource
        name: string
    }[]
    region: SimpleResource
  }