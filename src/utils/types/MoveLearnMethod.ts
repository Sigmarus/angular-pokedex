import { SimpleResource } from "./SimpleResource"

export interface MoveLearnMethod {
    descriptions: {
        description: string
        language: SimpleResource
    }[]
    id: number
    name: string
    names: {
        language: SimpleResource
        name: string
    }[]
    version_groups: SimpleResource[]
  }