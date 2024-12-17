import { z } from 'zod'

export const registroSchema = z.object({
  /* Identificador del alumno */
  id_alumno: z.number({
    required_error: 'El numero de identifiacion del estudiante es requerido'
  }).int().positive().nonnegative(),

  /* Identificador del libro */
  id_libro: z.number({
    required_error: 'El numero de identifiacion del libro es requerido'
  }).int().positive().nonnegative(),

  /* Fecha de inicio del prestamo */
  inicio: z.string({
    required_error: 'La fecha de inicio es requerida'
  }).nonempty(),

  /* Fecha de fin del prestamo */
  fin: z.string({
    required_error: 'La fecha de fin es requerida'
  }).nonempty(),

  /* Numero de libros entregados */
  id_entregado: z.number({
    required_error: 'El numero de libros entregado es requerido'
  }).int().positive().nonnegative(),
})