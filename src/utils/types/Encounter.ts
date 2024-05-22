import { SimpleResource } from "./SimpleResource"

export interface Encounter {
  location_area: SimpleResource
  version_details: {
    encounter_details: {
      chance: number
      condition_values: SimpleResource[]
      max_level: number
      method: SimpleResource
      min_level: number
    }[]
    max_chance: number
    version: SimpleResource
  }
}