import { z } from 'zod';

const Player = z.object({
  player: z
    .string()
    .min(1, 'Name must be at least 1 charater')
    .max(10),
});

type Player = z.infer<typeof Player>;
