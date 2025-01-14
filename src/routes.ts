import z from "zod";
import type { FastifyTypedInstance } from "./types";

export async function routes(app: FastifyTypedInstance) {
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

    