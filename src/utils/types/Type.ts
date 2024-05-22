import { SimpleResource } from "./SimpleResource"

export interface Type {
    damage_relations: {
      double_damage_from: SimpleResource[]
      double_damage_to: SimpleResource[]
      half_damage_from: SimpleResource[]
      half_damage_to: SimpleResource[]
      no_damage_from: SimpleResource[]
      no_damage_to: SimpleResource[]
    }
    game_indices: {
        game_index: number
        generation: SimpleResource
    }[]
    generation: SimpleResource
    id: number
    move_damage_class: SimpleResource
    moves: SimpleResource[]
    name: string
    names: {
        language: SimpleResource
        name: string
    }[]
    past_damage_relations: {
        damage_relations: {
            double_damage_from: SimpleResource[]
            double_damage_to: SimpleResource[]
            half_damage_from: SimpleResource[]
            half_damage_to: SimpleResource[]
            no_damage_from: SimpleResource[]
            no_damage_to: SimpleResource[]
        }
        generation: SimpleResource
    }[]
    pokemon: {
        pokemon: SimpleResource
        slot: number
    }[]
}