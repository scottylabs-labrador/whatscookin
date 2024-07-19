import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// export default function ProfileScreen() {
// }

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    
      <ThemedView style={styles.container}>
        <SafeAreaView>
          <SignedIn>
            <ThemedText>Hello {user?.emailAddresses[0].emailAddress}</ThemedText>
          </SignedIn>
        </SafeAreaView>
        <SafeAreaView>
          <SignedOut>
            <Link href="/sign-in">
              <ThemedText>Sign In</ThemedText>
            </Link>
            <Link href="/sign-up">
              <ThemedText>Sign Up</ThemedText>
            </Link>
          </SignedOut>
        </SafeAreaView>
      </ThemedView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})