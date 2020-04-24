export interface MovesProps {
  move: {
    name: string
    url: string
  }
  version_group_details: VersionGroupDetails[]
}

interface VersionGroupDetails {
  level_learned_at: number
  move_learn_method: {
    name: string
  }
}

export interface EntryProps {
  language: {
    name: string
  }
  flavor_text: string
}
