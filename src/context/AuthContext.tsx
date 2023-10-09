import { Session } from "@supabase/supabase-js";
import { ReactElement, createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { supabase } from "../config/supabaseConfig";

export type Profile = {
  name: string;
  lastName: string;
};

export type IAuth = {
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
  session: Session | null;
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
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
  const [profile, setProfile] = useState<Profile>({
    name: "",
    lastName: "",
  });

  async function RestoreSession() {
    const { data } = await supabase.auth.getSession();

    const { data: Profile } = await supabase
      .from("profile")
      .select("*")
      .eq("userId", session?.user.id);

    if (Profile) {
      const { name, lastName } = Profile?.[0] as Profile;
      setProfile({ name, lastName });
    }

    setSession(data.session);
  }

  useEffect(() => {
    RestoreSession();
  }, [session]);

  return (
    <AuthContext.Provider value={{ session, setSession, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
