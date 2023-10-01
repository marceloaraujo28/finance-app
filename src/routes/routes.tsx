import { Authenticated } from "./Authenticated";
import { Unauthenticated } from "./Unauthenticated";

export function Routes() {
  const user = false;
  return user ? <Authenticated /> : <Unauthenticated />;
}
