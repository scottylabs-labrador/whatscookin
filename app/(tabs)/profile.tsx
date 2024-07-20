import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import BannerView from '@/components/BannerView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextBanner } from '@/components/TextBanner';

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

export default function ProfileScreen() {
  const { user } = useUser();


  return (
    // <ParallaxScrollView
    // headerText={"hello " + user?.fullName ?? ""}
    //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>

    <BannerView
      bannerText={"hello " + user?.fullName ?? ""}
    >
      <ThemedView>
        <SignedIn>
          {/* <TextBanner text={"hello " + user?.fullName ?? ""} /> */}
          <ThemedText>Hello {user?.emailAddresses[0].emailAddress}</ThemedText>
        </SignedIn>

        {/* <SignedOut></SignedOut> */}
      </ThemedView>
    </BannerView>
    // </ParallaxScrollView>
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
});