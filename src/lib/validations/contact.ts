import * as z from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'שם מלא חייב להכיל לפחות 2 תווים')
    .max(50, 'שם מלא לא יכול להכיל יותר מ-50 תווים'),
  email: z
    .string()
    .email('כתובת אימייל לא תקינה')
    .min(5, 'כתובת אימייל חייבת להכיל לפחות 5 תווים'),
  message: z
    .string()
    .min(10, 'תוכן ההודעה חייב להכיל לפחות 10 תווים')
    .max(1000, 'תוכן ההודעה לא יכול להכיל יותר מ-1000 תווים'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 