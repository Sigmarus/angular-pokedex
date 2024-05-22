import { SimpleResource } from "./SimpleResource"

export interface Region {
    id: number
    locations: SimpleResource[]
    main_generation: SimpleResource
    name: string
    names: {
        language: SimpleResource
        name: string
    }[]
    pokedexes: SimpleResource[]
    version_groups: SimpleResource[]
}