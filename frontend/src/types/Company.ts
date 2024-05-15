import {z} from 'zod';
import { employeeSchema } from './Employee';
console.log('Hello ');

export const companySchema = z.object({
    name: z.string().min(4, "Name must be at least 4 characters"),
    email: z.string().email('Email is not valid!'),
    numberOfEmployees: z.number().min(1, 'You must render at least 1 employee!').max(100, 'You can only render 100 employees at once!'),
    description: z.string().optional(),
    employees :  z.array(employeeSchema)
})



export type Company = z.infer<typeof companySchema>;