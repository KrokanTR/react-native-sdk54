import { useUserSync } from "@/hooks/useUserSync";
import { useAuth } from "@clerk/expo";
import { Redirect, Slot } from "expo-router";

export default function RootLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  //sync Clerk user => Supabase
  try {
    useUserSync();
  } catch (error) {
    console.error("Error syncing user:", error);
  }

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/sign-in" />;

  return <Slot />;
}
