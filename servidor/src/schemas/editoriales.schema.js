import { z } from 'zod'

export const editorialSchema = z.object({
  /* Nombre de la editorial */
  nombre: z.string({
    required_error: 'El nombre de la editorial es requerido',
  }).min(4, {
    message: 'El nombre de la editorial debe tener al menos 4 caracteres',
  }).max(20, {
    message: 'El nombre de la editorial debe tener como máximo 20 caracteres',
  }),
})