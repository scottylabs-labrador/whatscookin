import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { ImageViewer } from '@/components/ImageViewer';

const PlaceholderImage = require('../../assets/images/react-logo.png');

export default function UploadScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} />
            </ThemedView>
            <StatusBar style="auto" />
        </ThemedView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    }
});