import ParallaxScrollView from '@/components/ParallaxScrollView';
import Post from '@/components/Post';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

import { db } from '@/firebaseConfig';

import { useEffect, useState } from 'react';
import { Photo } from '@/components/utils/types';
import { ScrollView, StyleSheet } from 'react-native';
import { getPhotos, getPhotoURL } from '@/components/utils/dataUtils';
import TextBanner from '@/components/TextBanner';





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
    
    

    // const Photo = {
    //     reference: "https://firebasestorage.googleapis.com/v0/b/boilerplate-7545b.appspot.com/o/images%2F09ef0f36-c512-4626-a967-765b148478fc?alt=media&token=722f2639-78f1-4e97-8109-717b7508f230",
    //     uploadTime: new Date('2024-08-16'),
    //     userId: 'qge'
    // }

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
