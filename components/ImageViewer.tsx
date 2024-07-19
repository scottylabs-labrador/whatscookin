import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ placeholderImageSource }) => {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 340,
    borderRadius: 18,
  },
});
