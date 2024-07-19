import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

import type { PropsWithChildren } from 'react';

type Props = {
  placeholderImageSource: ImageSourcePropType ;
};

export default function ImageViewer({
  placeholderImageSource,
}: Props) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
