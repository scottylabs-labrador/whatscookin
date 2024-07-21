import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import BannerView from '@/components/BannerView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextBanner } from '@/components/TextBanner';

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { user } = useUser();


  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <SignedIn>
          <TextBanner
            text={"hello " + user?.fullName ?? ""}
          ></TextBanner>
        </SignedIn>
      </SafeAreaView>
      <SafeAreaView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    // padding: 20,
  },
});
