import Tasks from "../tasks-page";
import { getLoggedInUser } from "../auth";

export default async function Page({ paragonUserToken }) {
  const user = await getLoggedInUser();
  return <Tasks paragonUserToken={user?.paragonUserToken} />;
}
