import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const apiResponse = await fetch("api/whatever");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: (success) => {
      if (success) {
        //user is sync with DB
        router.push(origin ? `$/{origin}` : "/dashboard");
      }
    },
  });
};

export default Page;
