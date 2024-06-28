import Integrations from "../integrations-page";
import { getLoggedInUser } from '../auth';

export default async function Page({ paragonUserToken }) {
  const user = await getLoggedInUser();
  return <Integrations paragonUserToken={user?.paragonUserToken} />;
}
