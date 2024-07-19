// components/TextBanner.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type TextBannerProps = {
  text: string;
};

export const TextBanner = ({ text }: TextBannerProps) => {
  return (
    <View style={styles.bannerContainer}>
      {/* <Ionicons name="ios-information-circle" size={24} color="black" style={styles.icon} /> */}
      <Text style={styles.bannerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default TextBanner;
