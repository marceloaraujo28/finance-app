import { useAuthContext } from "../context/AuthContext";
import { Authenticated } from "./Authenticated";
import { Unauthenticated } from "./Unauthenticated";

export function Routes() {
  const { session } = useAuthContext();
  return session ? <Authenticated /> : <Unauthenticated />;
}
