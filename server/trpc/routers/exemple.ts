import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

export const exempleRouter = router({
  hello: publicProcedure
    .input(z.object({ message: z.string() }))
    .query(({ input }): string => {
      return `Hello ${input.message} 😃`;
    }),
});
