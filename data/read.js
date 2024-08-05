import { collection, getDocs } from 'firebase/firestore'
import { db } from './config'

export async function fetchCabs() {
    try {
        const querySnapshot = await getDocs(collection(db, 'cabs'));
        return querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));
    } catch (error) {
        throw new Error('Unable to fetch cabs');
    }
}

export async function fetchCabDetail(cabId) {
    try {
        const querySnapshot = await getDocs(collection(db, `cabs/${cabId}/details`));
        
        return querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));
    } catch (error) {
        throw new Error('Unable to fetch cab details');
    }
}

export async function fetchMyCabs() {
    try {
        const querySnapshot = await getDocs(collection(db, 'booked'));
        return querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));
    } catch (error) {
        throw new Error('Unable to fetch booked cabs');
    }
}
