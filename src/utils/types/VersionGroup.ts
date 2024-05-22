import { SimpleResource } from "./SimpleResource"

export interface VersionGroup {
    generation: SimpleResource
    id: number
    move_learn_methods: SimpleResource[]
    name: string
    order: number
    pokedexes: SimpleResource[]
    regions: SimpleResource[]
    versions: SimpleResource[]
  }