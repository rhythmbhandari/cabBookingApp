import React, { useEffect, useState } from 'react';
import * as db from '../../data';
import CabInfo from './CabInfo';
import BookingButton from './BookingButton';

const CabDetail = ({ route, navigation }) => {
    const { cabId, companyName, cabModel, cabImage } = route.params;
    const [cabDetails, setCabDetails] = useState({});
    const [myCabs, setMyCabs] = useState([]);

    useEffect(() => {
        const fetchCabDetails = async () => {
            try {
                const data = await db.fetchCabDetail(cabId);
                setCabDetails(data[0]);
                const bookedCabs = await db.fetchMyCabs();

                setMyCabs(bookedCabs);
            } catch (error) {
                Alert.alert('Error', 'Unable to load cab details. Please try again.');
            }
        };

        fetchCabDetails();
    }, [cabId]);

    return (
        <>
            <CabInfo
                companyName={companyName}
                cabModel={cabModel}
                cabImage={cabImage}
                cabDetails={cabDetails}
            />
            <BookingButton
                cabDetails={cabDetails}
                companyName={companyName}
                cabModel={cabModel}
                cabImage={cabImage}
                myCabs={myCabs}
                navigation={navigation}
            />
        </>
    );
};

export default CabDetail;