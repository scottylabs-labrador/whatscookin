import React from "react";

import { db } from '@/firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const getPhotoURL = async (docId: string) => {
    // docId: 09ef0f36-c512-4626-a967-765b148478fc
    const storage = getStorage();
    try {
        const reference = ref(storage, '/images/'+docId);
        const url = await getDownloadURL(reference);
        return url;
    } catch {
        console.log(docId);
        return 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg';
    }
    
}

export async function getPhotos(db:any) {
    const photosCol = collection(db, 'Photos');
    const photoSnapshot = await getDocs(photosCol);
    const photoList = photoSnapshot.docs.map(async(doc) => ({
        reference: await getPhotoURL(doc.id),
        uploadTime: doc.data().uploadTime,
        userId: doc.data().userId,
    }));
    return photoList;
}

const getSingleDoc = async() => {
    const docRef = doc(db, "Photos", "09ef0f36-c512-4626-a967-765b148478fc");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document");
    }
}
