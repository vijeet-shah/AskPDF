import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  authCallback: publicProcedure.query(() => {
    const { getUser } = getKindeServerSession();
    const user: any = getUser();

    if (!user.id || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
      // Database
      return { sucess: true };
    }
  }),
});

export type AppRouter = typeof appRouter;
