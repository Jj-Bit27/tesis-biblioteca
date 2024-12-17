import { z } from 'zod'

export const entregadoSchema = z.object({
  /* Estado de la entrega */
  estado: z.boolean()
})