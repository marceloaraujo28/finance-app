import { Session } from "@supabase/supabase-js";
import { ReactElement, createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { supabase } from "../config/supabaseConfig";

export type IAuth = {
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
  session: Session | null;
};

export const AuthContext = createContext<IAuth | null>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactElement }) {
  const [session, setSession] = useState<Session | null>(null);

  async function RestoreSession() {
    const { data } = await supabase.auth.getSession();

    setSession(data.session);
  }

  useEffect(() => {
    RestoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
}
