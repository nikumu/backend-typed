import type { FastifyInstance } from "fastify";
import z from "zod";

export async function routes(app: FastifyInstance) {
    app.get('users', () => {
        return []
    })

    app.post('/users', {
        schema: {
            body: z.object({
                name: z.string(),
            }),
        }
    }, () => {
        return {}
    })
}    

    