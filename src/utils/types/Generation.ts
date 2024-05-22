import { SimpleResource } from "./SimpleResource"

export interface Generation {
    abilities: SimpleResource[]
    id: number
    main_region: SimpleResource
    moves: SimpleResource[]
    name: string
    names: {
        language: SimpleResource
        name: string
    }[]
    pokemon_species: SimpleResource[]
    types: SimpleResource[]
    version_groups: SimpleResource[]
  }