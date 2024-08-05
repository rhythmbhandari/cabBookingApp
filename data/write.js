import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './config';


export async function saveBooking(data) {
    try {
        const dbCollection = collection(db, 'booked');
        const docRef = await addDoc(dbCollection, data);
        return docRef.id;
    } catch (error) {
        throw new Error('Failed to save booking details. Please try again.');
    }
}


export async function cancelBooking(id) {
    try {
        const docRef = doc(db, 'booked', id);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        return false;
    }
}
