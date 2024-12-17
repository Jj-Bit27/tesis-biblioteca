import { z } from 'zod'

export const libroSchema = z.object({
  /* Titulo del libro */
  titulo: z.string({
    required_error: 'El titulo del libro es requerido',
  }).min(4, {
    message: 'El titulo del libro debe tener al menos 4 caracteres'
  }).max(40, {
    message: 'El titulo del libro no puede tener más de 40 caracteres'
  }),

  /* ID del autor */
  id_autor: z.number({
    required_error: 'El ID del autor es requerido',
  }).int().positive().nonnegative(),

  /* ID de la editorial */
  id_editorial: z.number({
    required_error: 'El ID de la editorial es requerido',
  }).int().positive().nonnegative(),

  /* ID de la categoria */
  id_categoria: z.number({
    required_error: 'El ID de la categoria es requerido',
  }).int().positive().nonnegative(),

  /* Numero de existencias */
  existencias: z.number({
    required_error: 'El numero de existencias es requerido',
  }).int().positive().nonnegative(),

  /* Numero de paginas */
  paginas: z.number({
    required_error: 'El numero de paginas es requerido',
  }).int().positive().nonnegative(),
})