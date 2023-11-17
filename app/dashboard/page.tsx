import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server";

const Page = () => {
  const getUserAsync = async () => {
    const { getUser } = await getKindeServerSession();
    return getUser();
  };

  const displayUser = async () => {
    const user = await getUserAsync();
    return user.email;
  };

  return <div>{displayUser()}</div>;
};

export default Page;
