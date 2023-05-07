import { FastifyInstance } from 'fastify'
import knex from 'knex'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const users = await knex('users').select()

    return { users }
  })
}
