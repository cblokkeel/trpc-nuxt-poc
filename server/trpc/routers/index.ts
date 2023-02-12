import { router } from '../trpc';
import { exempleRouter } from './exemple';

export const appRouter = router({
  exemple: exempleRouter,
});

export type AppRouter = typeof appRouter;
