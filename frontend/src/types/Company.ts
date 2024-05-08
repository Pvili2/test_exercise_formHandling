import {z} from 'zod';

console.log('Hello ');

export const companySchema = z.object({
    name: z.string(),
    email: z.string().email('Email is not valid!'),
    numberOfEmployees: z.number().min(1, 'You must render at least 1 employee!').max(100, 'You can only render 100 employees at once!'),
    description: z.string()
})



export type Company = z.infer<typeof companySchema>;