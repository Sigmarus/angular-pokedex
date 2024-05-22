import { SimpleResource } from "./SimpleResource"

export interface Species {
    base_happiness: number
    capture_rate: number
    color: SimpleResource
    egg_groups: SimpleResource[]
    evolution_chain: {
        url: string|undefined
    }
    evolves_from_species: null
    flavor_text_entries: {
        flavor_text: string
        language: SimpleResource
        version: SimpleResource
    }[]
    form_descriptions: any[]
    forms_switchable: boolean
    gender_rate: number
    genera: {
        genus: string
        language: SimpleResource
    }[]
    generation: SimpleResource
    growth_rate: SimpleResource
    habitat: SimpleResource
    has_gender_differences: boolean
    hatch_counter: number
    id: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    name: string
    names: {
        language: SimpleResource
        name: string
    }[]
    order: number
    pal_park_encounters: {
        area: SimpleResource
        base_score: number
        rate: number
    }[]
    pokedex_numbers: {
        entry_number: number
        pokedex: SimpleResource
    }[]
    shape: SimpleResource
    varieties: {
        is_default: boolean
        pokemon: SimpleResource
    }[]
}