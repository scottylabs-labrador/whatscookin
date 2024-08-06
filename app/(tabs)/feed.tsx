import ParallaxScrollView from '@/components/ParallaxScrollView';
import Post from '@/components/Post';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

import { db } from '@/firebaseConfig';

import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getPhotos, getPhotoURL } from '@/components/utils/dataUtils';
import TextBanner from '@/components/TextBanner';




// Note: timestamp in firebase is different from Date object, need to convert.
// see Post.tsx for details
// https://stackoverflow.com/questions/52247445/how-do-i-convert-a-firestore-date-timestamp-to-a-js-date

export default function FeedScreen() {
    const [photoCollection, setPhotoCollection] = useState<any>();

    useEffect(()=>{
        const func = () => {
            getPhotos(db).then(async(photoSnapshot)=>{
                try {
                    const results = await Promise.all(photoSnapshot);
                    setPhotoCollection(results);
                    // Now 'results' is an array of objects
                  } catch (error) {
                    console.error('Error resolving promises:', error);
                  }
                
            });
        }
        func();
        
        
    },[])

    return (
        <ThemedView style={{flex:1}}>
            <SafeAreaView >
            <TextBanner text={"Feed"} />
                <ScrollView>
                {photoCollection && photoCollection.map((doc:any, index:number) => (
                    <Post key={index} item={doc} />
                ))}
                </ScrollView>

            </SafeAreaView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
})
