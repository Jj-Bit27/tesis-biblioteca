import { z } from 'zod'

export const autorSchema = z.object({
  /* Nombre del autor */
  nombre: z.string({
    required_error: 'El nombre del autor es requerido',
  }).min(4, {
    message: 'El nombre del autor debe tener al menos 4 caracteres'
  }).max(20, {
    message: 'El nombre del autor no puede tener más de 20 caracteres'
  }),

  /* Apellido del autor */
  apellido: z.string({
    required_error: 'El apellido del autor es requerido',
  }).min(4, {
    message: 'El apellido del autor debe tener al menos 4 caracteres'
  }).max(20, {
    message: 'El apellido del autor no puede tener más de 20 caracteres'
  }),
})