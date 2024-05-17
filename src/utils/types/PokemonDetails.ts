import { SimpleResource } from "./SimpleResource"

export interface PokemonDetails {
    abilities: {
        ability: SimpleResource
        is_hidden: boolean
        slot: number
    }[]
    base_experience: number
    cries: {
        latest: string|null
        legacy: string|null
    }
    forms: SimpleResource[]
    game_indices: {
        game_index: number
        version: SimpleResource
    }[]
    height: number
    held_items: {
        item: SimpleResource
        version_details: {
            rarity: number
            version: SimpleResource
        }[]
    }[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: {
        move: SimpleResource
        version_group_details: {
            level_learned_at: number
            move_learn_method: SimpleResource
            version_group: SimpleResource
        }[]
    }[]
    name: string
    order: number
    past_abilities: any[]
    past_types: any[]
    species: SimpleResource
    sprites: PokemonDetailsSprite
    stats: {
        base_stat: number
        effort: number
        stat: SimpleResource
    }[]
    types: {
        slot: number
        type: SimpleResource
    }[]
    weight: number
}

export interface PokemonDetailsSprite {
    back_default: string|null
    back_female: string|null
    back_shiny: string|null
    back_shiny_female: string|null
    front_default: string|null
    front_female: string|null
    front_shiny: string|null
    front_shiny_female: string|null
    other: any
    versions: any
}