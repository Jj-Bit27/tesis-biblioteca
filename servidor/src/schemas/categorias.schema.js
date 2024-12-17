import { z } from 'zod'

export const categoriaSchema = z.object({
  /* Nombre de la categoria */
  nombre: z.string({
    required_error: 'El nombre de la categoria es requerido',
  }).min(4, {
    message: 'El nombre de la categoria debe tener al menos 4 caracteres',
  }).max(20, {
    message: 'El nombre de la categoria debe tener como máximo 20 caracteres',
  }),
})