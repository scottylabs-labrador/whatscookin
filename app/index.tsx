import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, Button } from "react-native";
import { Link, Redirect, Stack } from "expo-router";
import { useAuth, useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"
import { SafeAreaView } from "react-native-safe-area-context";

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
      <Redirect href="profile" />
    )
  }

  return (
    <SafeAreaView>
      <View>
        <Link href="/">
          <Text>Home</Text>
        </Link>
        <Button title="Sign in with Google" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;