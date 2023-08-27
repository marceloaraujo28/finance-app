import { Authenticated } from "./Authenticated";
import { Unauthenticated } from "./Unauthenticated";

export function Routes() {
  const user = true;
  return user ? <Authenticated /> : <Unauthenticated />;
}
