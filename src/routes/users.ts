import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { hash } from 'bcrypt'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const users = await knex('users').select()

    return { users }
  })

  // CREATE USER
  app.post('/', async (request, reply) => {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    })

    const { name, email, password } = createUserBody.parse(request.body)

    await knex('users').insert({
      id: randomUUID(),
      name,
      email,
      password: await hash(password, 10),
      created_at: new Date(),
      updated_at: new Date(),
    })

    return reply.status(201).send()
  })
}
