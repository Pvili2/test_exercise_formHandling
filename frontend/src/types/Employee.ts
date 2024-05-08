import {z} from 'zod'

const allowedJobs = z.enum(["accountant", "software developer", " software tester", " manager"])

const employeeSchema = z.object({
    name: z.string(),
    email: z.string().email('This is not a valid email address'),
    job:  allowedJobs,
    age: z.number().min(18).max(120),
    cv: z.instanceof(File)
})

export type Employee = z.infer<typeof employeeSchema>;