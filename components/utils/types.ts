import { Timestamp } from '@firebase/firestore-types';

export interface Photo {
    reference: string;
    uploadTime: Timestamp;
    userId: string;
}