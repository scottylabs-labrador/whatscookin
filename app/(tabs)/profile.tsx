import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// export default function ProfileScreen() {
// }

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    <ThemedView>
      <SignedIn>
        <ThemedText>Hello {user?.emailAddresses[0].emailAddress}</ThemedText>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <ThemedText>Sign In</ThemedText>
        </Link>
        <Link href="/sign-up">
          <ThemedText>Sign Up</ThemedText>
        </Link>
      </SignedOut>
    </ThemedView>
  );
}