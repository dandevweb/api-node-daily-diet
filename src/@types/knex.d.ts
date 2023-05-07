// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      name: string
      email: string
      password: string
      created_at: Date
      updated_at: Date
    }
    meals: {
      id: string
      name: string
      description: string
      datetime: string
      is_diet: boolean
      created_at: string
      updated_at: string
    }
  }
}
