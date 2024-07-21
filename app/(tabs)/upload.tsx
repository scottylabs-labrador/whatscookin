import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

import TextBanner from '@/components/TextBanner';

const { width, height } = Dimensions.get('window');
// console.log(width);
// console.log(height);

const PlaceholderImage = require('../../assets/images/react-logo.png');

export default function UploadScreen() {
    const [selectedImage, setSelectedImage] = useState("");

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
        // else {
        //   alert('You did not select any image.');
        // }
    };


    const useImage = () => {
        // does stuff with Firebase ??
        // add image info to Firebase
        // etc
    }


    return (
        <ThemedView style={styles.container}>
            <SafeAreaView>
                <TextBanner text="Upload"></TextBanner>
                <ThemedView style={styles.imageContainer}>
                    <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
                </ThemedView>
                <ThemedView style={styles.footerContainer}>
                    <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} width={width * 0.8} height={68} />
                    <Button label="Use this photo" onPress={useImage} width={width * 0.8} height={68} />
                </ThemedView>
                <StatusBar style="auto" />
            </SafeAreaView>
        </ThemedView>
    );
}


const styles = StyleSheet.create({
    container: {
        // display: "flex",
        flex: 1,
        justifyContent: 'center', // Centers children vertically
        alignItems: 'center', // Centers children horizontally
        backgroundColor: '#fff',
    },
    imageContainer: {
        // flex: 1,
        // paddingTop: 20,
        width: width * 0.95, // 90% of the screen width
        height: height * 0.5, // 50% of the screen height
    },
    footerContainer: {
        // flex: 1 / 3,
        // alignItems: 'center',
        top: height * 0.02
    },
});