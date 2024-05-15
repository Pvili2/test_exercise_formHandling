import {z} from 'zod'


export const employeeSchema = z.object({
    name: z.string().min(4),
    email: z.string().email('This is not a valid email address'),
    job: z.custom((job) => ["manager", "accountant", "software developer", "software tester"].includes(job)),
    age: z.number().min(18).max(120),
    cv: z.custom((file) => file instanceof File && file.type === 'application/pdf', {
        message: 'A feltöltött fájl nem PDF formátumú.',
      })
});
export type Employee = z.infer<typeof employeeSchema>;
