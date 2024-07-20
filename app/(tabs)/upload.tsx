import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

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
            <SafeAreaView >
                <ThemedView style={styles.imageContainer}>
                    <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
                </ThemedView>
                <ThemedView style={styles.footerContainer}>
                    <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
                    <Button label="Use this photo" onPress={useImage}/>
                </ThemedView>
                <StatusBar style="auto" />
            </SafeAreaView>
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
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});