import { useCallback, useEffect, useState } from "react";
import { paragon, SDK_EVENT } from "@useparagon/connect";

if (typeof window !== "undefined") {
  window.paragon = paragon;
}

export default function useParagon(paragonUserToken) {
  const [user, setUser] = useState(paragon.getUser());
  const [error, setError] = useState();

  const updateUser = useCallback(() => {
    const authedUser = paragon.getUser();
    if (authedUser.authenticated) {
      setUser({ ...authedUser });
    }
  }, []);

  // Listen for account state changes
  useEffect(() => {
    paragon.subscribe(SDK_EVENT.ON_INTEGRATION_INSTALL, updateUser);
    paragon.subscribe(SDK_EVENT.ON_INTEGRATION_UNINSTALL, updateUser);
    return () => {
      paragon.unsubscribe(SDK_EVENT.ON_INTEGRATION_INSTALL, updateUser);
      paragon.unsubscribe(SDK_EVENT.ON_INTEGRATION_UNINSTALL, updateUser);
    };
  }, []);

  useEffect(() => {
    if (!error) {
      paragon
        .authenticate(
          process.env.NEXT_PUBLIC_PARAGON_PROJECT_ID,
          paragonUserToken
        )
        .then(() => {
          const authedUser = paragon.getUser();
          if (authedUser.authenticated) {
            setUser(authedUser);
          }
        })
        .catch(setError);
    }
  }, [error, paragonUserToken]);

  return {
    paragon,
    user,
    error,
    updateUser,
  };
}
