import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, Button, StyleSheet, useColorScheme } from "react-native";
import { Link, Redirect, Stack } from "expo-router";
import { useAuth, useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import SigninBtn from "@/components/SigninBtn";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();
  const theme = useColorScheme() ?? 'light';

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({ redirectUrl: Linking.createURL("/profile", { scheme: "myapp" })});

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return (
      <Redirect href="feed" />
    )
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <View style={styles.container}>
          {/* <Link href="/">
            <Text>Home</Text>
          </Link> */}
          <ThemedText style={styles.heading} type='title'>Login</ThemedText>
          <ThemedText style={styles.centerText}>Welcome to InstaPlate!</ThemedText>
          <View style={styles.btnContainer}>
            <SigninBtn theme={theme} width={250} height={88} onPress={onPress}/>
          </View>
          
        </View>
      </SafeAreaView>
    </ThemedView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  heading: {
    textAlign: 'center',
    marginTop: '28%',
    marginBottom: '10%',
  },
  centerText: {
    textAlign: 'center',
  },
  btnContainer: {
    position: "absolute",
    top: '50%',
  }
})