import { SimpleResource } from "./SimpleResource"

export interface Ability {
    effect_changes: {
        effect_entries: {
            effect: string
            language: SimpleResource
        }[]
        version_group: SimpleResource
    }[]
    effect_entries: {
        effect: string
        language: SimpleResource
        short_effect: string
    }[]
    flavor_text_entries: {
        flavor_text: string
        language: SimpleResource
        version_group: SimpleResource
    }[]
    generation: SimpleResource
    is_main_series: boolean
    name: string
    names: {
        language: SimpleResource
        name: string
    }[]
    pokemon: {
        is_hidden: boolean
        pokemon: SimpleResource
        slot: number
    }[]
  }