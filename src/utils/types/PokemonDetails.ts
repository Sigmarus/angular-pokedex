import { SimpleResource } from './SimpleResource'

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
    sprites: {
        back_default: string|null
        back_female: string|null
        back_shiny: string|null
        back_shiny_female: string|null
        front_default: string|null
        front_female: string|null
        front_shiny: string|null
        front_shiny_female: string|null
        other: {
            dream_world: {
                front_default: string|null
                front_female: string|null
            }
            home: {
                front_default: string|null
                front_female: string|null
                front_shiny: string|null
                front_shiny_female: string|null
            }
            'official-artwork': {
                front_default: string|null
                front_shiny: string|null
            }
            showdown: {
                back_default: string|null
                back_female: string|null
                back_shiny: string|null
                back_shiny_female: string|null
                front_default: string|null
                front_female: string|null
                front_shiny: string|null
                front_shiny_female: string|null
            }
        }
        versions: {
            'generation-i': {
                'red-blue': {
                    back_default: string|null
                    back_gray: string|null
                    back_transparent: string|null
                    front_default: string|null
                    front_gray: string|null
                    front_transparent: string|null
                },
                yellow: {
                    back_default: string|null
                    back_gray: string|null
                    back_transparent: string|null
                    front_default: string|null
                    front_gray: string|null
                    front_transparent: string|null
                }
            },
            'generation-ii': {
                crystal: {
                    back_default: string|null
                    back_shiny: string|null
                    back_shiny_transparent: string|null
                    back_transparent: string|null
                    front_default: string|null
                    front_shiny: string|null
                    front_shiny_transparent: string|null
                    front_transparent: string|null
                },
                gold: {
                    back_default: string|null
                    back_shiny: string|null
                    front_default: string|null
                    front_shiny: string|null
                    front_transparent: string|null
                },
                silver: {
                    back_default: string|null
                    back_shiny: string|null
                    front_default: string|null
                    front_shiny: string|null
                    front_transparent: string|null
                }
            },
            'generation-iii': {
                emerald: {
                    front_default: string|null
                    front_shiny: string|null
                },
                'firered-leafgreen': {
                    back_default: string|null
                    back_shiny: string|null,
                    front_default: string|null,
                    front_shiny: string|null
                },
                'ruby-sapphire': {
                    back_default: string|null,
                    back_shiny: string|null,
                    front_default: string|null,
                    front_shiny: string|null
                }
            },
            'generation-iv': {
                'diamond-pearl': {
                    back_default: string|null,
                    back_female: null,
                    back_shiny: string|null,
                    back_shiny_female: null,
                    front_default: string|null,
                    front_female: null,
                    front_shiny: string|null,
                    front_shiny_female: null
                },
                'heartgold-soulsilver': {
                    back_default: string|null,
                    back_female: null,
                    back_shiny: string|null,
                    back_shiny_female: null,
                    front_default: string|null,
                    front_female: null,
                    front_shiny: string|null,
                    front_shiny_female: null
                },
                platinum: {
                    back_default: string|null,
                    back_female: null,
                    back_shiny: string|null,
                    back_shiny_female: null,
                    front_default: string|null,
                    front_female: null,
                    front_shiny: string|null,
                    front_shiny_female: null
                }
            },
            'generation-v': {
                'black-white': {
                    animated: {
                        back_default: string|null,
                        back_female: null,
                        back_shiny: string|null,
                        back_shiny_female: null,
                        front_default: string|null,
                        front_female: null,
                        front_shiny: string|null,
                        front_shiny_female: string|null
                    },
                    back_default: string|null,
                    back_female: string|null,
                    back_shiny: string|null,
                    back_shiny_female: string|null,
                    front_default: string|null,
                    front_female: string|null,
                    front_shiny: string|null,
                    front_shiny_female: string|null
                }
            },
            'generation-vi': {
                'omegaruby-alphasapphire': {
                    front_default: string|null,
                    front_female: string|null,
                    front_shiny: string|null,
                    front_shiny_female: string|null
                },
                'x-y': {
                    front_default: string|null,
                    front_female: string|null,
                    front_shiny: string|null,
                    front_shiny_female: string|null
                }
            },
            'generation-vii': {
                icons: {
                    front_default: string|null,
                    front_female: string|null
                },
                'ultra-sun-ultra-moon': {
                    front_default: string|null,
                    front_female: string|null,
                    front_shiny: string|null
                    front_shiny_female: string|null
                }
            },
            'generation-viii': {
                icons: {
                    front_default: string|null
                    front_female: string|null
                }
            }
        }
    }
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