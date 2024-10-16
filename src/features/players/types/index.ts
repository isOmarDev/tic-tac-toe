import { z } from 'zod';

export const NameSchema = z
  .string()
  .trim()
  .min(1, { message: 'Name is required.' })
  .min(3, { message: 'Name must be at least 3 characters.' })
  .max(10, { message: 'Name must be at most 10 characters.' });

export const SideSchema = z
  .string()
  .refine((val) => val === 'X' || val === 'O', {
    message: "Side must be either 'X' or 'O'",
  });

export const PlayerSchema = z.object({
  name: NameSchema,
  side: SideSchema,
});

export type Player = z.infer<typeof PlayerSchema>;
