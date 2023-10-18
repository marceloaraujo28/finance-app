import { Session } from "@supabase/supabase-js";
import { ReactElement, createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { supabase } from "../config/supabaseConfig";
import { ProfileData, useGetProfile } from "../hooks/useGetProfile";

export type IAuth = {
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
  session: Session | null;
  profile: ProfileData | null;
  setProfile: (value: React.SetStateAction<ProfileData | null>) => void;
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
  const [profile, setProfile] = useState<ProfileData | null>({
    name: "",
    lastName: "",
  });

  async function RestoreSession() {
    const { data } = await supabase.auth.getSession();

    if (!data) return;

    setSession(data.session);
    if (!!data.session?.user.id) {
      const getProfile = await useGetProfile(data.session?.user.id);
      if (getProfile)
        setProfile({
          name: getProfile.name,
          lastName: getProfile.lastName,
        });
    }
  }

  useEffect(() => {
    RestoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
